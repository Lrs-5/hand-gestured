// -----------------------------
// Finger State Helper
// -----------------------------

function isFingerUp(tip, pip, landmarks) {
  return landmarks[tip].y < landmarks[pip].y;
}

// -----------------------------
// Distance Helper
// -----------------------------

function distance(a, b) {
  return Math.hypot(
    a.x - b.x,
    a.y - b.y
  );
}

// -----------------------------
// Gesture Recognition
// -----------------------------

export function recognizeGesture(landmarks) {

  const thumbTip = landmarks[4];
  const thumbIP = landmarks[3];

  const indexTip = landmarks[8];
  const middleTip = landmarks[12];
  const ringTip = landmarks[16];
  const pinkyTip = landmarks[20];

  const thumbUp = thumbTip.y < thumbIP.y;

  const indexUp = isFingerUp(8,6,landmarks);
  const middleUp = isFingerUp(12,10,landmarks);
  const ringUp = isFingerUp(16,14,landmarks);
  const pinkyUp = isFingerUp(20,18,landmarks);

  const thumbIndexDistance =
    distance(thumbTip,indexTip);

  const indexMiddleDistance =
    distance(indexTip,middleTip);

  const ringPinkyDistance =
    distance(ringTip,pinkyTip);

  /* -----------------------
      Finger Heart 🫰
  ------------------------ */

  if(
    thumbIndexDistance < 0.05 &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ){
    return "🫰";
  }

  /* -----------------------
      Thumbs Up 👍
  ------------------------ */

  if(
    thumbUp &&
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ){
    return "👍";
  }

  /* -----------------------
      Peace ✌️
  ------------------------ */

  if(
    indexUp &&
    middleUp &&
    !ringUp &&
    !pinkyUp &&
    indexMiddleDistance > 0.05
  ){
    return "✌️";
  }

  /* -----------------------
      Cross Fingers 🤞
  ------------------------ */

  if(
    indexUp &&
    middleUp &&
    !ringUp &&
    !pinkyUp &&
    indexMiddleDistance < 0.04
  ){
    return "🤞";
  }

  /* -----------------------
      One Finger ☝️
  ------------------------ */

  if(
    indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ){
    return "☝️";
  }

  /* -----------------------
      Rock 🤟
  ------------------------ */

  if(
    indexUp &&
    pinkyUp &&
    !middleUp &&
    !ringUp
  ){
    return "🤟";
  }

  /* -----------------------
      Call Me 🤙
  ------------------------ */

  if(
    thumbUp &&
    pinkyUp &&
    !indexUp &&
    !middleUp &&
    !ringUp
  ){
    return "🤙";
  }

  /* -----------------------
      Vulcan 🖖
  ------------------------ */

  if(
    thumbUp &&
    indexUp &&
    middleUp &&
    ringUp &&
    pinkyUp &&
    ringPinkyDistance > 0.08
  ){
    return "🖖";
  }

  /* -----------------------
      Open Palm ✋
  ------------------------ */

  if(
    thumbUp &&
    indexUp &&
    middleUp &&
    ringUp &&
    pinkyUp
  ){
    return "✋";
  }

  /* -----------------------
      Fist 👊
  ------------------------ */

  if(
    !thumbUp &&
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ){
    return "👊";
  }

  /* -----------------------
      Default
  ------------------------ */

  return "🤚";

}