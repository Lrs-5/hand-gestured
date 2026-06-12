import { useState, useRef } from "react";
import WebcamFeed from "./componets/Webcam";
import HandDetector from "./componets/HandDetector";
import "./App.css";

function App() {
  const [cameraOn, setCameraOn] = useState(false);
  const [emoji, setEmoji] = useState("🤚");

  const webcamRef = useRef(null);

  return (
    <div className="app">
      <h1 className="title">
        ✨ Hand Gesture Emoji Generator✨
      </h1>

      <button
        className="button"
        onClick={() => setCameraOn(!cameraOn)}
      >
        {cameraOn
          ? "📴 Stop Camera"
          : "📷 Start Camera"}
      </button>

      <p className="gesture-text">
        Show a hand gesture to generate emojis
      </p>

      {cameraOn && (
        <div className="camera-card">
          <div className="camera-wrapper">
            <WebcamFeed webcamRef={webcamRef} />

            <div className="floating-emoji">
              {emoji}
            </div>
          </div>

          <HandDetector
            webcamRef={webcamRef}
            setEmoji={setEmoji}
          />
        </div>
      )}
    </div>
  );
}

export default App;