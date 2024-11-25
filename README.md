# 🎤 Audio Recording App

A simple and intuitive React Native app for recording voice notes using Expo. This app allows users to create, play, search, and delete voice recordings. It features offline functionality and an easy-to-navigate interface, making it a perfect digital journal for voice recordings.

## 📋 Table of Contents
* Features
* Tech Stack
* Getting Started
* Installation
* Running the App
* Usage
* Project Structure
* Permissions
* Contributing
* License

## ✨ Features

* Voice Recording: Record audio notes using the device's microphone.
* Playback: Play back recorded voice notes with play/pause/stop controls.
* Search Functionality: Search recorded notes by name.
* Storage Management: Efficient storage and retrieval of recordings using AsyncStorage.
* Delete Voice Notes: Delete unwanted voice notes.
* Offline Access: Access and manage recordings offline.
* User-Friendly Interface: Simple and responsive UI for easy navigation.
* Backup: Potential to add cloud backup functionality in the future.


## 🛠 Tech Stack

* Frontend: React Native
* Framework: Expo
* Audio Library: Expo AV
* Storage: AsyncStorage
* UI Components: React Native Elements, React Native Gesture Handler


## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

## Prerequisites

* Node.js: Ensure you have Node.js installed (version 14 or above).
* Expo CLI: Install Expo CLI globally if you haven't already.
```

npm install -g expo-cli
```

## 📦 Installation

* Clone the Repository:

```

git clone https://github.com/your-username/audio-recording-app.git
cd audio-recording-app
```
* Install Dependencies:

```

npm install
```

* Install Expo Libraries:

```

npx expo install expo-av @react-native-async-storage/async-storage
```
* Update Dependencies: Ensure all dependencies are compatible with your Expo SDK version:

```
npx expo doctor
```

## ▶️ Running the App

Start the Expo Server:

```

npx expo start
```
## Run on a Physical Device:

* Download the Expo Go app on your Android/iOS device.
* Scan the QR code displayed in your terminal/browser.

* Run on Web:

```
npx expo start --web
```


## 🌐 Usage

1. Recording a New Voice Note:

* Tap the "Start Recording" button to record a new note.
* Tap "Stop Recording" to end the recording and save it.

2. Playing a Voice Note:

* Click on any voice note in the list to play it.
* Use play, pause, and stop controls for playback.

3. Searching for a Voice Note:

* Use the search bar at the top to find specific recordings by name.

4. Deleting a Voice Note:

* Tap the delete button on the desired recording to remove it from the list.


## 📂 Project Structure

```

audio-app/
├── assets/                    # Icons and splash images
├── components/                # Reusable components
│   ├── AudioRecorder.js       # Component for recording audio
│   ├── AudioPlayer.js         # Component for playback controls
│   └── VoiceNotesList.js      # Component to display list of recordings
├── App.js                     # Main entry point
├── app.json                   # Expo configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation

```

## 🔑 Permissions

The app requires the following permissions:

* Microphone Access: To record audio notes.
* Storage Access: To save and retrieve recordings (for Android devices).
iOS (in app.json):

```
json
Copy code
"ios": {
  "permissions": {
    "NSMicrophoneUsageDescription": "This app requires access to the microphone to record audio."
  }
}

```
Android (in app.json):

```json

"android": {
  "permissions": [
    "RECORD_AUDIO",
    "READ_EXTERNAL_STORAGE",
    "WRITE_EXTERNAL_STORAGE"
  ]
}
```

## 🧩 Dependencies

* expo-av: For audio recording and playback
* @react-native-async-storage/async-storage: For local storage of recordings
* react-native-elements: For UI components
* expo-permissions: For handling permissions (only if using older Expo SDK versions)

## Install dependencies:

```

npx expo install expo-av @react-native-async-storage/async-storage
npm install react-native-elements
```

## 🤝 Contributing

Contributions are welcome! If you'd like to help improve the app:

1. Fork the repository.
2. Create a new feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact
If you have any questions or feedback, feel free to reach out:

* Email: asiphilemthethwa@gmail.com
* GitHub: Asiphile1

  
Happy coding! 🚀

