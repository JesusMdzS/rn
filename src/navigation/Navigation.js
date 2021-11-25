import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { MenuScreen } from "../screens/MenuScreen";
import { ListUsersScreen } from "../screens/ListUsersScreen";
import { userAddForm } from "../screens/forms/userAddForm";
import { userUpdateForm } from "../screens/forms/userUpdateForm";

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
      <Stack.Screen
        name="userUpdateForm"
        component={userUpdateForm}
        options={{
          gestureEnabled: false,
          title: "Editar",
        }}
      />
    </Stack.Navigator>
  );
};
