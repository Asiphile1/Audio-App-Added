import React, { useEffect, useState } from "react";
import { View, Image, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export default function CustomSplashScreen({ onFinish }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        if (Platform.OS !== "web") {
          await SplashScreen.preventAutoHideAsync();
        }
        setTimeout(() => {
          setIsLoaded(true);
        }, 3000);
      } catch (e) {
        console.warn(e);
      }
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (Platform.OS !== "web") {
        SplashScreen.hideAsync();
      }
      onFinish();
    }
  }, [isLoaded, onFinish]);

  if (Platform.OS === "web") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("../assets/splash.gif")}
          style={{ width: 800, height: 800 }}
        />
      </View>
    );
  }

  return null;
}




























// import React, { useEffect, useState } from "react";
// import * as SplashScreen from "expo-splash-screen";
// import { View, Image } from "react-native";

// export default function CustomSplashScreen({ onFinish }) {
//   // Renamed component to CustomSplashScreen
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const loadResources = async () => {
//       try {
//         await SplashScreen.preventAutoHideAsync();
//         // Simulate resource loading
//         setTimeout(() => {
//           setIsLoaded(true);
//         }, 3000); // Wait for 3 seconds
//       } catch (e) {
//         console.warn(e);
//       }
//     };

//     loadResources();
//   }, []);

//   useEffect(() => {
//     if (isLoaded) {
//       SplashScreen.hideAsync();
//       onFinish();
//     }
//   }, [isLoaded, onFinish]);

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//       }}
//     >
//       <Image
//         source={require("../assets/splash.gif")}
//         style={{ width: 800, height: 800 }}
//       />
//     </View>
//   );
// }

// {
//   /* <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/Ao1fDEJIO1lYhiG6He" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/giphyirl-Ao1fDEJIO1lYhiG6He">via GIPHY</a></p> */
// }

// {
//   /* <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/QAD2c9bfVENP2Rig82" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/CBSAllAccess-science-fiction-replay-the-twilight-zone-QAD2c9bfVENP2Rig82">via GIPHY</a></p> */
// }
