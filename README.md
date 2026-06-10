# ✨ Hand Gesture Emoji 

A fun and interactive React application that uses **MediaPipe Hand Landmarker** and your webcam to detect hand gestures in real time and display corresponding emojis on the screen.

## 🚀 Features

- 📷 Real-time webcam feed
- ✋ Hand gesture detection using MediaPipe
- 😀 Automatic emoji generation
- 🎨 Modern responsive UI
- 📱 Mobile-friendly design
- ⚡ Built with React + Vite
- 🔥 Smooth emoji animations

---

## 🛠️ Tech Stack

- React.js
- Vite
- MediaPipe Tasks Vision
- React Webcam
- CSS3

---

## 📂 Project Structure

```bash
src/
│
├── componets/
│   ├── Webcam.jsx
│   └── HandDetector.jsx
│
├── utils/
│   └── gestureRecognizer.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🎯 Supported Gestures

| Gesture | Emoji |
|----------|--------|
| Open Palm | 🤚 |
| Thumbs Up | 👍 |
| Peace Sign | ✌️ |
| Fist | ✊ |
| OK Sign | 👌 |
| Rock Sign | 🤘 |

*(Can be extended with more custom gestures.)*

---

## ⚙️ Installation

Clone the repository:

```bash
git clone  https://github.com/Lrs-5/hand-gestured.git
```

Move into project directory:

```bash
cd hand-emoji-app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 📦 Required Packages

```bash
npm install react-webcam
npm install @mediapipe/tasks-vision
```

---

## 🎥 How It Works

1. User starts the webcam.
2. MediaPipe Hand Landmarker detects hand landmarks.
3. Gesture recognition logic analyzes finger positions.
4. Corresponding emoji is generated.
5. Emoji appears live on the camera screen.

---

## 📸 Demo

### Open Palm

🤚

### Thumbs Up

👍

### Peace Sign

✌️

### Fist

✊

### OK Sign

👌

---

## 🔮 Future Improvements

- Multiple hand detection
- Emoji particle effects
- Gesture history tracking
- Screenshot capture
- Emoji rain animation
- AR filters
- Custom gesture training

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the project and submit a pull request.

---

## 👩‍💻 Author

**Lipsarani Sahoo**

Computer Science Engineering Student

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.
