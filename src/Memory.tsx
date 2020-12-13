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
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { loadAll } from "./Store";
import { FAB, List } from "react-native-paper";
import moment from "moment";


export function Memory() {
  
  const navigation = useNavigation();
  
  const toBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
    
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
  logo: {},
});
