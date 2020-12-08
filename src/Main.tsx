// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
// import { loadAll } from "./Store";
// import { FAB, List } from "react-native-paper";
// import moment from "moment";

// export function Main() {
  
//   const [memos, setMemos] = useState<Memo[]>([]);
//   useEffect(() => {
//     const initialize = async () => {
//       const newMemos = await loadAll();
//       setMemos(newMemos);
//     };
//     navigation.addListener("focus", initialize);
//   });
//   const navigation = useNavigation();
//   const toCompose = () => {
//     navigation.navigate("Compose");
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={memos}
//         renderItem={({ item }) => (
//           <List.Item
//             style={styles.item}
//             title={item.text}
//             titleNumberOfLines={5}
//             description={`作成日時：${moment(item.createdAt).format(
//               "yyyy-MM-DD ddd HH:mm"
//             )}`}
//             descriptionStyle={styles.description}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <FAB style={styles.addButton} icon="pencil" onPress={toCompose} />
//       <StatusBar style="auto" />
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
//   item: {
//     minWidth: "100%",
//     flexDirection: "column",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//   },
//   description: {
//     flex: 1,
//     textAlign: "right",
//   },
//   addButton: {
//     position: "absolute",
//     right: 16,
//     bottom: 16,
//   },
// });
