import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function AudioList({ audioNotes, onDelete }) {
  const [sound, setSound] = useState(null);

  const playAudio = async (uri) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri });
    setSound(newSound);
    await newSound.playAsync();
  };

  return (
    <FlatList
      data={audioNotes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <View style={styles.buttons}>
            <Button title="Play" onPress={() => playAudio(item.uri)} />
            <Button
              title="Delete"
              onPress={() => onDelete(item.id)}
              color="red"
            />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});

// import React, { useState } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { Audio } from 'expo-av';

// export default function AudioList({ audioNotes, onDelete }) {
//   const [sound, setSound] = useState(null);

//   const playAudio = async (uri) => {
//     if (sound) {
//       await sound.unloadAsync();
//     }
//     const { sound: newSound } = await Audio.Sound.createAsync({ uri });
//     setSound(newSound);
//     await newSound.playAsync();
//   };

//   return (
//     <FlatList
//       data={audioNotes}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text>{item.name}</Text>
//           <View style={styles.buttons}>
//             <Button title="Play" onPress={() => playAudio(item.uri)} />
//             <Button title="Delete" onPress={() => onDelete(item.id)} color="red" />
//           </View>
//         </View>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     padding: 10,
//     borderBottomWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   buttons: {
//     flexDirection: 'row',
//     gap: 10,
//   },
// });
