import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { loadAll } from "./Store";
import { FAB, List } from "react-native-paper";
import moment from "moment";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

export function Menu() {
const [isReady, setIsReady] = useState(false);
const [sound1, setSound1] = useState<Audio.Sound>();

const initializeAsync = async () => {
  try {
    const newSound1 = new Audio.Sound();
    const sound1Asset = Asset.fromModule(require("../assets/billiard-ball1.mp3"));
    await newSound1.loadAsync(sound1Asset);
    setSound1(newSound1);

    setIsReady(true);
  } catch (error) {
    alert(error);
  }
};
useEffect(() => {
  initializeAsync();
}, []);

const navigation = useNavigation();
const toCompose = () => {
  navigation.navigate("MEMO");
  sound1?.replayAsync();
};
const toMemo = () => {
  navigation.navigate("MEMO LOG");
  sound1?.replayAsync();
};
const toScore = () => {
  navigation.navigate("SCORE");
  sound1?.replayAsync();
};
const toMemory = () => {
  navigation.navigate("SCORE LOG");
  sound1?.replayAsync();
};
return (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={toCompose}>
      <Text style={styles.buttonText}>{"メモ"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={toMemo}>
      <Text style={styles.buttonText}>{"メモ記録"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={toScore}>
      <Text style={styles.buttonText}>{"スコア記入"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={toMemory}>
      <Text style={styles.buttonText}>{"スコア記録"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{"スコア分析"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{"練習方法"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{"ボウリング場連携"}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{"設定"}</Text>
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
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "slategray",
    width: "80%",
    height: 80,
  },
  buttonText: {
    fontSize: 35,
    textAlign: "center",
  },
});