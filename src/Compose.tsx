import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView,Platform,TouchableWithoutFeedback,Keyboard } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { save } from "./Store";

export function Compose() {
const [text, setText] = React.useState("");
const navigation = useNavigation(); 
const toBack = () => {
  navigation.goBack();
};
const onSave = () => {
  save(text, Date.now());
  navigation.goBack();
};
  return (
    <TouchableWithoutFeedback style = {{flex: 1}} onPress = {() => {
      Keyboard.dismiss()
    }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <TextInput
            style={{width:"100%",height:100}}
            placeholder="メモしたいことを入力してください。"
            multiline
            onChangeText={(text) => setText(text)}
            keyboardType="default"
          />
          <Button onPress={onSave} mode="contained">
            保存
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4511e",
    alignItems: "center",
    justifyContent: "center",
  },
});

