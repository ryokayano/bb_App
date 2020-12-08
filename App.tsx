import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
// import { save } from "./Store";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export function Compose() {
  const [number, setNumber] = useState("");
  const tableHead = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const tableData = [
    ["", "", "", "","","","","","",""],
    ["", "", "", "", "", "", "", "", "", "" ],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} />
        <Rows data={tableData} />
      </Table>
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 30,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
  },
  
});
