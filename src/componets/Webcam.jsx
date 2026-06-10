import Webcam from "react-webcam";

function WebcamFeed({ webcamRef }) {
  return (
    <Webcam
      ref={webcamRef}
      mirrored={true}
      audio={false}
      className="camera"
    />
  );
}

export default WebcamFeed;