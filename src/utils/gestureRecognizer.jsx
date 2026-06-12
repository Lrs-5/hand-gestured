function isFingerUp(tip, pip, landmarks) {
  return landmarks[tip].y < landmarks[pip].y;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function recognizeGesture(landmarks) {
  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];

  const indexTip = landmarks[8];
  const middleTip = landmarks[12];

  const indexUp = isFingerUp(8, 6, landmarks);
  const middleUp = isFingerUp(12, 10, landmarks);
  const ringUp = isFingerUp(16, 14, landmarks);
  const pinkyUp = isFingerUp(20, 18, landmarks);

  const thumbUp = thumbTip.y < thumbIP.y;

  const thumbIndexDistance = distance(thumbTip, indexTip);
  const indexMiddleDistance = distance(indexTip, middleTip);

  // 🫰 Finger Heart
  if (
    thumbIndexDistance < 0.05 &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "🫰";
  }

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

  // 🤞 Crossed Fingers (approximation)
  if (
    indexUp &&
    middleUp &&
    indexMiddleDistance < 0.04 &&
    !ringUp &&
    !pinkyUp
  ) {
    return "🤞";
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

  // 🤙 Call Me
  if (
    thumbUp &&
    !indexUp &&
    !middleUp &&
    !ringUp &&
    pinkyUp
  ) {
    return "🤙";
  }

  // 🖖 Vulcan Salute (approximation)
  if (
    thumbUp &&
    indexUp &&
    middleUp &&
    ringUp &&
    pinkyUp &&
    distance(landmarks[12], landmarks[16]) > 0.08
  ) {
    return "🖖";
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