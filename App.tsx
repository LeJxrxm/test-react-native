import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import * as React from "react";
import {Provider} from "react-redux";
import store from "./src/store";
import SearchResult from "./src/screens/SearchResult";

export default function App() {
  const Stack = createNativeStackNavigator<any>();
  return (
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={"Home"} component={Home}/>
              <Stack.Screen name={"SearchResult"} component={SearchResult}/>
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
