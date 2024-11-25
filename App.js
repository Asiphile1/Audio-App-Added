import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AudioRecorder from "./components/AudioRecorder";
import AudioList from "./components/AudioList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "./components/SearchBar";
import CustomSplashScreen from "./components/SplashScreen"; // Rename the import to avoid conflict

export default function App() {
  const [audioNotes, setAudioNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Load audio notes once splash is hidden
    if (!isSplashVisible) {
      loadAudioNotes();
    }
  }, [isSplashVisible]);

  const loadAudioNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem("audioNotes");
      if (storedNotes) {
        setAudioNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Failed to load audio notes:", error);
    }
  };

  const saveAudioNotes = async (notes) => {
    try {
      await AsyncStorage.setItem("audioNotes", JSON.stringify(notes));
      setAudioNotes(notes);
    } catch (error) {
      console.error("Failed to save audio notes:", error);
    }
  };

  const handleDelete = async (id) => {
    const filteredNotes = audioNotes.filter((note) => note.id !== id);
    await saveAudioNotes(filteredNotes);
  };

  const addNewNote = (note) => {
    const updatedNotes = [...audioNotes, note];
    saveAudioNotes(updatedNotes);
  };

  const filteredNotes = audioNotes.filter((note) =>
    note.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  return (
    
    
    <View style={styles.container}>
      {isSplashVisible ? (
        <CustomSplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
        
          <SearchBar setSearchTerm={setSearchTerm} />
          <AudioRecorder addNewNote={addNewNote} />
          <AudioList audioNotes={filteredNotes} onDelete={handleDelete} />
        </>
      )}
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#eed3c7',
  },
});















// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, Button, FlatList } from "react-native";
// import AudioRecorder from "./components/AudioRecorder";
// import AudioList from "./components/AudioList";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SearchBar from "./components/SearchBar";

// export default function App() {
//   const [audioNotes, setAudioNotes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredNotes, setFilteredNotes] = useState([]);

//   useEffect(() => {
//     loadAudioNotes();
//   }, []);

//   useEffect(() => {
//     if (searchQuery === '') {
//       setFilteredNotes(audioNotes);
//     } else {
//       const filtered = audioNotes.filter((note) =>
//         note.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredNotes(filtered);
//     }
//   }, [searchQuery, audioNotes]);

//   const loadAudioNotes = async () => {
//     const storedNotes = await AsyncStorage.getItem('audioNotes');
//     if (storedNotes) {
//       setAudioNotes(JSON.parse(storedNotes));
//     }
//   };

//   const saveAudioNotes = async (notes) => {
//     await AsyncStorage.setItem('audioNotes', JSON.stringify(notes));
//     setAudioNotes(notes);
//   };

//   const addNewNote = (note) => {
//     const updatedNotes = [...audioNotes, note];
//     saveAudioNotes(updatedNotes);
//   };

//   const deleteNote = (id) => {
//     const updatedNotes = audioNotes.filter((note) => note.id !== id);
//     saveAudioNotes(updatedNotes);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Search notes..."
//         style={styles.searchBar}
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />
//       <AudioRecorder addNewNote={addNewNote} deleteNote={deleteNote} />
//       <FlatList
//         data={filteredNotes}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.noteContainer}>
//             <Text>{item.name}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     paddingLeft: 10,
//     marginBottom: 10,
//   },
//   noteContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
// });

