import React, { useState } from "react";
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function AudioRecorder({ addNewNote }) {
  const [recording, setRecording] = useState(null);
  const [recordName, setRecordName] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert("Permission to access microphone is required");
        return;
      }

      // Prepare the audio mode
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      // Create a new recording instance
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error("Failed to start recording:", err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;

      setIsRecording(false);

      // Stop and unload the recording
      await recording.stopAndUnloadAsync();

      // Get the URI of the recorded audio
      const uri = recording.getURI();
      const id = new Date().getTime();
      const newNote = {
        id,
        uri,
        name: recordName.trim() || `Audio ${id}`,
      };

      addNewNote(newNote);

      // Reset the state
      setRecording(null);
      setRecordName("");
    } catch (error) {
      console.error("Failed to stop recording:", error);
    }
  };

  return (
    <View style={styles.recorder}>
      <Text style={styles.heading}>Audio Recorder</Text>

      <TextInput
        placeholder="Name Your Note"
        value={recordName}
        onChangeText={setRecordName}
        style={styles.input}
      />
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  recorder: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "#eed3c7",
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
               
  input: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#fff5eb',
    width: '95%',
    height: 50,
  },
});

// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
// import AudioRecorder from './components/AudioRecorder';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function AudioRecorder({ addNewNote, deleteNote }) {
//   const [recording, setRecording] = useState(null);
//   const [playbackObject, setPlaybackObject] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentNote, setCurrentNote] = useState(null);
//   const [recordName, setRecordName] = useState('');

//   const startRecording = async () => {
//     const permission = await Audio.requestPermissionsAsync();
//     if (!permission.granted) return;
//     await Audio.setAudioModeAsync({
//       allowsRecordingIOS: true,
//       playsInSilentModeIOS: true,
//     });

//     const { recording } = await Audio.Recording.createAsync(
//       Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//     );
//     setRecording(recording);
//   };

//   const stopRecording = async () => {
//     await recording.stopAndUnloadAsync();
//     const uri = recording.getURI();
//     const id = Date.now();
//     const note = {
//       id,
//       uri,
//       name: recordName || `Note ${id}`,
//       createdAt: new Date().toISOString(),
//     };
//     setCurrentNote(note);
//     addNewNote(note);
//     setRecordName('');
//     setRecording(null);
//   };

//   const playPauseAudio = async () => {
//     if (playbackObject) {
//       if (isPlaying) {
//         await playbackObject.pauseAsync();
//       } else {
//         await playbackObject.playAsync();
//       }
//       setIsPlaying(!isPlaying);
//     } else {
//       const { sound } = await Audio.Sound.createAsync({ uri: currentNote.uri });
//       setPlaybackObject(sound);
//       sound.setOnPlaybackStatusUpdate((status) => {
//         if (status.didJustFinish) {
//           setIsPlaying(false);
//         }
//       });
//       await sound.playAsync();
//       setIsPlaying(true);
//     }
//   };

//   const stopAudio = async () => {
//     if (playbackObject) {
//       await playbackObject.stopAsync();
//       setIsPlaying(false);
//     }
//   };

//   const deleteCurrentNote = () => {
//     deleteNote(currentNote.id);
//     setCurrentNote(null);
//     stopAudio();
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter Note Name"
//         style={styles.input}
//         value={recordName}
//         onChangeText={setRecordName}
//       />
//       <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
//       {currentNote && (
//         <View style={styles.controls}>
//           <Text>{currentNote.name}</Text>
//           <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playPauseAudio} />
//           <Button title="Stop" onPress={stopAudio} color="orange" />
//           <Button title="Delete" onPress={deleteCurrentNote} color="red" />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     padding: 8,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   controls: {
//     marginTop: 10,
//     padding: 10,
//   },
// });
