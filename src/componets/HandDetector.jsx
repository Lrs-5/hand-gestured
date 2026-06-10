import { useEffect, useRef } from "react";
import {
  FilesetResolver,
  HandLandmarker,
} from "@mediapipe/tasks-vision";

import { recognizeGesture } from "../utils/gestureRecognizer";

function HandDetector({ webcamRef, setEmoji }) {
  const lastEmojiRef = useRef("🤚");
  const stableCountRef = useRef(0);

  useEffect(() => {
    let handLandmarker;
    let animationFrameId;

    async function setupHandDetector() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      handLandmarker =
        await HandLandmarker.createFromOptions(
          vision,
          {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
            },
            runningMode: "VIDEO",
            numHands: 1,
          }
        );

      detectHands();
    }

    async function detectHands() {
      if (
        webcamRef.current &&
        webcamRef.current.video &&
        handLandmarker
      ) {
        const video = webcamRef.current.video;

        if (
          video.readyState === 4 &&
          video.videoWidth > 0 &&
          video.videoHeight > 0
        ) {
          const results =
            handLandmarker.detectForVideo(
              video,
              performance.now()
            );

          if (
            results.landmarks &&
            results.landmarks.length > 0
          ) {
            const detectedEmoji =
              recognizeGesture(
                results.landmarks[0]
              );

            if (
              detectedEmoji ===
              lastEmojiRef.current
            ) {
              stableCountRef.current++;
            } else {
              stableCountRef.current = 0;
              lastEmojiRef.current =
                detectedEmoji;
            }

            if (
              stableCountRef.current >= 5
            ) {
              setEmoji(detectedEmoji);
            }
          }
        }
      }

      animationFrameId =
        requestAnimationFrame(detectHands);
    }

    setupHandDetector();

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, [webcamRef, setEmoji]);

  return (
  <p className="status">
    ✋ Hand Detection Active
  </p>
);
}

export default HandDetector;