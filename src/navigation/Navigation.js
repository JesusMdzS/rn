import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { ListUsersScreen } from "../screens/ListUsersScreen";
import { userAddForm } from "../screens/userAddForm";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          gestureEnabled: true,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          gestureEnabled: false,
          title: "Quaxar",
        }}
      />
      <Stack.Screen
        name="ListUsersScreen"
        component={ListUsersScreen}
        options={{
          gestureEnabled: false,
          title: "Usuarios",
        }}
      />
      <Stack.Screen
        name="userAddForm"
        component={userAddForm}
        options={{
          gestureEnabled: false,
          title: "Agregar",
        }}
      />
    </Stack.Navigator>
  );
};
