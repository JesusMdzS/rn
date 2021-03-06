import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export const userAddForm = () => {
  const navigation = useNavigation();
  const url = "http://192.168.100.6/API/users.php";
  const [agregar, setagregar] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    password: "",
    usuarioTipo: "",
  });

  const onChange = (value, campo) => {
    setagregar({
      ...agregar,
      [campo]: value,
    });
  };

  const getData = () => {
    if (
      !agregar.nombre ||
      !agregar.apellidoPaterno ||
      !agregar.apellidoMaterno ||
      !agregar.email ||
      !agregar.password ||
      !agregar.usuarioTipo
    ) {
      console.log("llena tus datos");
      Alert.alert("Intenta de nuevo", "Debes ingresar todos los datos");
    } else {
      sendData();
    }
  };

  const sendData = async () => {
    await axios
      .post(url + "?insert=1", {
        body: JSON.stringify(agregar),
      })
      .then((res) => {
        Alert.alert("Usuario agregado", "los datos han sido registrados", [
          {
            text: "Ok",
            onPress: () => navigation.navigate("ListUsersScreen"),
            style: "Ok",
          },
        ]);
      });

    //aqui  va el llamado a la api para añadir info
    console.log("nombre :" + agregar.nombre);
    console.log("apellido P :" + agregar.apellidoPaterno);
    console.log("apellido P :" + agregar.apellidoMaterno);
    console.log("email :" + agregar.email);
    console.log("password :" + agregar.password);
    console.log("tipo de usuario :" + agregar.usuarioTipo);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <ScrollView>
        <View style={style.form}>
          <TextInput
            style={style.input}
            placeholder="Ingresa tu nombre"
            value={agregar.nombre}
            onChangeText={(e) => onChange(e, "nombre")}
          ></TextInput>
          <TextInput
            style={style.input}
            placeholder="Ingresa tu apellido paterno"
            value={agregar.apellidoPaterno}
            onChangeText={(e) => onChange(e, "apellidoPaterno")}
          ></TextInput>
          <TextInput
            style={style.input}
            placeholder="Ingresa tu apellido materno"
            value={agregar.apellidoMaterno}
            onChangeText={(e) => onChange(e, "apellidoMaterno")}
          ></TextInput>

          <TextInput
            style={style.input}
            placeholder="Ingresa tu correo"
            keyboardType="email-address"
            value={agregar.email}
            onChangeText={(e) => onChange(e, "email")}
          ></TextInput>
          <TextInput
            style={style.input}
            placeholder="Ingresa  tu contraseña"
            secureTextEntry={true}
            value={agregar.password}
            onChangeText={(e) => onChange(e, "password")}
          ></TextInput>
          <TextInput
            style={style.input}
            placeholder="Ingresa  tu tipo de usuario"
            value={agregar.usuarioTipo}
            onChangeText={(e) => onChange(e, "usuarioTipo")}
          ></TextInput>
          <View>
            <TouchableOpacity style={style.buttonx} onPress={getData}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                Agregar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#261361",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 300,
    height: 460,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  input: {
    height: 55,
    margin: 5,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    borderWidth: 0,
    padding: 20,
    fontSize: 15,
    backgroundColor: "#EDEDED",
  },
  select: {
    height: 55,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    borderColor: "#E5E5E5",
    fontSize: 15,
    backgroundColor: "#EDEDED",
  },
  buttonx: {
    marginLeft: "10%",
    marginTop: 10,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#261361",
    padding: 10,
    borderRadius: 10,
  },
  inputSelect: {
    fontSize: 5,
    backgroundColor: "blue",
  },
  ScrollView: {},
});
