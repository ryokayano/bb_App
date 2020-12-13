import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import { Provider as PaperProvider } from "react-native-paper";

import { Cover } from "./src/Cover";
import { Menu } from "./src/Menu";
import { Memo } from "./src/Memo";
import { Compose } from "./src/Compose";
import { Score } from "./src/Score";
import { Memory } from "./src/Memory";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
          
          <Stack.Screen name="BOWLING SCORE" component={Cover} />
          <Stack.Screen name="MENU" component={Menu} />
          <Stack.Screen name="MEMO LOG" component={Memo} />
          <Stack.Screen name="MEMO" component={Compose} />
          <Stack.Screen name="SCORE" component={Score} />
          <Stack.Screen name="SCORE LOG" component={Memory} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
