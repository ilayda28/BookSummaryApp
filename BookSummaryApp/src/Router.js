import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DetailsScreen from './Screens/DetailsScreen';
import ListScreen from './Screens/ListScreen';

const Stack = createNativeStackNavigator();

function Router () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} options ={{headerShown : false}}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title:"Summary",headerStyle:{backgroundColor:"#CCCCFF"},headerTitleStyle:{color:"black"}, headerTintColor:"purple"}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default Router;
