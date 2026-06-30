import { useState, useRef } from "react";
import WebcamFeed from "./components/Webcam";
import HandDetector from "./components/HandDetector";
import "./App.css";

function App() {
  const webcamRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [emoji, setEmoji] = useState("🤚");

  return (
    <div className="app">

      {/* Background Blobs */}
      <div className="bg blob1"></div>
      <div className="bg blob2"></div>
      <div className="bg blob3"></div>

      {/* Header */}
      <header className="hero">

        <span className="badge">
          AI • MediaPipe • React
        </span>

        <h1 className="title">
          Hand Gesture
          <br />
          Emoji Generator
        </h1>

        <p className="subtitle">
          Detect hand gestures in real time using
          MediaPipe Computer Vision and instantly
          convert them into emojis.
        </p>

        <button
          className="button"
          onClick={() => setCameraOn(!cameraOn)}
        >
          {cameraOn ? "Stop Camera" : "Start Camera"}
        </button>

      </header>

      {cameraOn && (

        <div className="dashboard">

          {/* Camera */}

          <div className="camera-card">

            <div className="camera-header">

              <div className="live-dot"></div>

              <span>Live Camera</span>

            </div>

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

          {/* Right Panel */}

          <div className="info-panel">

            <div className="glass-card">

              <h3>Current Gesture</h3>

              <div className="big-emoji">
                {emoji}
              </div>

            </div>

            <div className="glass-card">

              <h3>Status</h3>

              <p className="green">
                🟢 Detecting
              </p>

            </div>

            <div className="glass-card">

              <h3>Supported Gestures</h3>

              <div className="gesture-grid">

                <span>👍</span>
                <span>✌️</span>
                <span>👊</span>
                <span>🤟</span>
                <span>🤙</span>
                <span>☝️</span>
                <span>🖖</span>
                <span>🫰</span>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;