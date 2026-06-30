import { useEffect, useRef, useState } from "react";
import {
  FilesetResolver,
  HandLandmarker,
} from "@mediapipe/tasks-vision";

import { recognizeGesture } from "../utils/gestureRecognizer";

function HandDetector({ webcamRef, setEmoji }) {
  const handLandmarkerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const lastGestureRef = useRef("🤚");
  const stableFramesRef = useRef(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function initializeDetector() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );

        handLandmarkerRef.current =
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

        if (mounted) {
          setLoading(false);
          detectHands();
        }
      } catch (err) {
        console.error("Failed to load MediaPipe:", err);
      }
    }

    function detectHands() {
      const webcam = webcamRef.current;

      if (
        webcam &&
        webcam.video &&
        handLandmarkerRef.current
      ) {
        const video = webcam.video;

        if (
          video.readyState === 4 &&
          video.videoWidth > 0
        ) {
          const results =
            handLandmarkerRef.current.detectForVideo(
              video,
              performance.now()
            );

          if (
            results.landmarks &&
            results.landmarks.length > 0
          ) {
            const currentGesture =
              recognizeGesture(results.landmarks[0]);

            if (
              currentGesture ===
              lastGestureRef.current
            ) {
              stableFramesRef.current++;
            } else {
              stableFramesRef.current = 0;
              lastGestureRef.current =
                currentGesture;
            }

            if (
              stableFramesRef.current >= 5
            ) {
              setEmoji(currentGesture);
            }
          }
        }
      }

      animationFrameRef.current =
        requestAnimationFrame(detectHands);
    }

    initializeDetector();

    return () => {
      mounted = false;

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      if (handLandmarkerRef.current) {
        handLandmarkerRef.current.close?.();
      }
    };
  }, [webcamRef, setEmoji]);

  return (
    <div className="status">
      {loading ? (
        <>
          <span className="loader"></span>
          Loading AI Model...
        </>
      ) : (
        <>
          <span className="live-dot"></span>
          Hand Detection Active
        </>
      )}
    </div>
  );
}

export default HandDetector;