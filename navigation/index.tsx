import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { Entypo } from '@expo/vector-icons';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen 
        name="Home"
        component={HomeScreen}
        options={{ 
          tabBarIcon: ({ color, size }) =>
          <Entypo name="home" size={size} color={color} />
        }}
      />
      <BottomTab.Screen 
        name="Planner"
        component={PlannerScreen}
        options={{ 
          tabBarIcon: () =>
          <Entypo name="add-to-list" size={24} color="black" />
        }}
      />
    </BottomTab.Navigator>
  );
}
  

  