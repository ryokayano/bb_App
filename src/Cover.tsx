import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image,SafeAreaView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import icon01 from "../assets/marc-mueller-lwTSdfXfskE-unsplash (2).jpg";
import icon01 from "../assets/bowling-game-poster_1284-3880.jpg";
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';


export function Cover() {
  const [isReady, setIsReady] = useState(false);
  const [sound1, setSound1] = useState<Audio.Sound>();

  const initializeAsync = async () => {
    try {
      
      const newSound1 = new Audio.Sound();
      const sound1Asset = Asset.fromModule(require('../assets/bowling-pin1.mp3'));
      await newSound1.loadAsync(sound1Asset);
      setSound1(newSound1);

      setIsReady(true);
    }
    catch(error) {
      alert(error);
    }
  }
  useEffect(() => {
    initializeAsync();
  },[]);

  const navigation = useNavigation();
  const toMenu = () => {
    navigation.navigate("MENU");
    sound1?.replayAsync();
  };
  return (
      <SafeAreaView style={styles.container}>
        <Image style={{ width: "100%", height: "80%", }} source={icon01} />
        <TouchableOpacity style={styles.button} onPress={toMenu}>
          <Text style={styles.buttonText}>{"START"}</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4511e",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
    width: "50%",
    height: 80,
    bottom: 0,
    marginTop: 40,
  },
  buttonText: {
    color: "gray",
    fontSize: 40,
    textAlign: "center",
  },
});
