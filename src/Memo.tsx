import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity,Image,SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { loadAll } from "./Store";
import { FAB, List } from "react-native-paper";
import moment from "moment";
import icon01 from "../assets/メモアイコン.png";
import icon02 from "../assets/ボーリングの無料アイコン5.png";

export function Memo() {
  const [memos, setMemos] = useState<Memo[]>([]);
  useEffect(() => {
    const initialize = async () => {
      const newMemos = await loadAll();
      setMemos(newMemos);
    };
    navigation.addListener("focus", initialize);
  });
  const navigation = useNavigation();
  const toCompose = () => {
    navigation.navigate("MEMO");
  };
  const toBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => (
          <List.Item
            style={styles.item}
            title={item.text}
            titleNumberOfLines={5}
            description={`作成日時：${moment(item.createdAt).format(
              "yyyy-MM-DD ddd HH:mm"
            )}`}
            descriptionStyle={styles.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={toCompose}>
        <Image source={icon01} style={styles.logo} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4511e",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    minWidth: "100%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    backgroundColor: "white",
  },
  description: {
    flex: 1,
    textAlign: "right",
  },
  addButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
  },
  toButton: {
    position: "absolute",
    left: 30,
    bottom: 30,
  },
  logo: {
    
  },
});
