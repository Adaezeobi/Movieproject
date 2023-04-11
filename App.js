import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Constants from "./src/Constants";
import Home from "./src/Home";
import Registration from "./src/Components/Registration";
import Login from "./src/Components/Login";
import Details from "./src/Details";
import { MaterialIcons } from "@expo/vector-icons";
const homeStack = createNativeStackNavigator();
const registerStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="Movies"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Constants.baseColor },
          headerTitleStyle: { color: Constants.textColor },
          headerLeft: () => (
            <Entypo name="menu" size={34} color={Constants.textColor} />
          ),
          headerRight: () => (
            <AntDesign name="search1" size={34} color={Constants.textColor} />
          ),
        }}
      ></homeStack.Screen>
      <homeStack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: Constants.baseColor },
          headerTitleStyle: { color: Constants.textColor },
        }}
      ></homeStack.Screen>
    </homeStack.Navigator>
  );
}

function RegisterStackScreen() {
  return (
    <registerStack.Navigator>
      <registerStack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: true }}
      ></registerStack.Screen>
      <registerStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      ></registerStack.Screen>
    </registerStack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Sign Up"
          component={RegisterStackScreen}
          options={RegisHeaderStyle}
        />
        <Tab.Screen
          name="Homepage"
          component={HomeStackScreen}
          options={homeHeaderStyle}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const homeHeaderStyle = {
  title: "Home",
  headerShown: false,
  tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
};

const RegisHeaderStyle = {
  title: "Sign Up",
  headerShown: false,
  tabBarIcon: () => (
    <MaterialIcons name="app-registration" size={24} color="black" />
  ),
};
export default App;
