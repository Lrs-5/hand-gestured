import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function WebcamFeed({ webcamRef }) {
  return (
    <Webcam
      ref={webcamRef}
      audio={false}
      mirrored={true}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      className="camera"
    />
  );
}

export default WebcamFeed;