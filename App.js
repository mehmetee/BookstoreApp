import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/navigation/tabs";
import BookDetail from './src/screen/DetailScreenFolder/BookDetail';

const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent'
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName="HomePage"
      >
        <Stack.Screen  name="HomePage" component={Tabs}/>
        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

