function isFingerUp(tip, pip, landmarks) {
  return landmarks[tip].y < landmarks[pip].y;
}

export function recognizeGesture(landmarks) {
  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];

  const indexUp = isFingerUp(8, 6, landmarks);
  const middleUp = isFingerUp(12, 10, landmarks);
  const ringUp = isFingerUp(16, 14, landmarks);
  const pinkyUp = isFingerUp(20, 18, landmarks);

  const thumbUp = thumbTip.y < thumbIP.y;

  // 👍 Thumbs Up
  if (
    thumbUp &&
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "👍";
  }

  // ✌️ Peace
  if (
    indexUp &&
    middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "✌️";
  }

  // ☝️ One Finger
  if (
    indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "☝️";
  }

  // 🤟 Rock
  if (
    indexUp &&
    pinkyUp &&
    !middleUp &&
    !ringUp
  ) {
    return "🤟";
  }

  // ✋ Open Palm
  if (
    thumbUp &&
    indexUp &&
    middleUp &&
    ringUp &&
    pinkyUp
  ) {
    return "✋";
  }

  // 👊 Fist
  if (
    !thumbUp &&
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "👊";
  }

  return "🤚";
}