// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { TextInput, Button } from "react-native-paper";
// import { save } from "./Store";
// import { Table, Row, Rows } from "react-native-table-component";

// export function Compose() {
// const [text, setText] = React.useState("");
// const navigation = useNavigation(); 
// const toBack = () => {
//   navigation.goBack();
// };
// const onSave = () => {
//   save(text, Date.now());
//   navigation.goBack();
// };

//   const tableHead = ["Head", "Head2", "Head3", "Head4"];
//   const tableData = [
//     ["1", "2", "3", "4"],
//     ["a", "b", "c", "d"],
//     ["1", "2", "3", "456\n789"],
//     ["a", "b", "c", "d"],
//   ];
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="メモしたいことを入力してください。"
//         multiline
//         onChangeText={(text) => setText(text)}
//       />
//       <Button onPress={onSave} mode="contained">
//         保存
//       </Button>

//       <Table borderStyle={{ borderWidth: 30 }}>
//         <Row data={tableHead} />
//         <Rows data={tableData} />
//       </Table>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

