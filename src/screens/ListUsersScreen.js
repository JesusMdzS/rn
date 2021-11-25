import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useUsuarios } from "../hooks/useUsuarios";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

export const ListUsersScreen = () => {
  const navigation = useNavigation();
  const { usuarios } = useUsuarios();
  // console.log(usuarios.map());

  const Edit = (id) => {
    console.log("editado con id: " + id);
    navigation.navigate("userUpdateForm", {
      idpersona: id,
    });
  };

  const Delete = (id) => {
    Alert.alert("Accion de borrar elemento", "borrado con la id: " + id, [
      {
        text: "Cancel",
        onPress: () => console.log("cancelado"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("borrado con id: " + id) },
    ]);
  };

  const listItems = usuarios.map((persona, key) => {
    return (
      <View key={key} style={style.container}>
        <Text style={style.text}>ID: {persona.id}</Text>
        <Text style={style.text}>
          Nombre: {persona.first_name} {persona.last_name}
        </Text>
        <Text style={style.text}>Email: {persona.email}</Text>
        <Text style={style.text}>Contraseña: {persona.avatar}</Text>
        <Text style={style.text}>Tipo de usuario: {persona.id}</Text>
        <Text style={style.text}>Creación: 09/03/20</Text>
        <Text style={style.text}>Modificación: 10/05/21</Text>
        <View style={style.buttons}>
          <TouchableOpacity style={style.edit} onPress={() => Edit(persona.id)}>
            <Icon name="pencil" size={30} color="#8d8d8d" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.delete}
            onPress={() => Delete(persona.id)}
          >
            <Icon name="trash" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return (
    <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
      <Text style={{ textAlign: "center", fontSize: 45, fontWeight: "bold" }}>
        Usuarios{" "}
      </Text>
      <TouchableOpacity
        style={style.add}
        onPress={() => navigation.navigate("userAddForm")}
      >
        <Text style={style.addText}>Crea un usuario</Text>
      </TouchableOpacity>
      {listItems}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  add: {
    width: "80%",
    backgroundColor: "#261361",
    borderRadius: 30,
    height: 40,
    alignContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  addText: {
    color: "white",
    fontSize: 30,
    padding: 1,
  },
  container: {
    width: "100%",
    // width:Dimensions.get("window").width,
    height: 200,
    backgroundColor: "#261361",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "white",
  },
  buttons: {
    paddingTop: 10,
    flexDirection: "row",
  },
  edit: {
    width: "48%",
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    width: "48%",
    height: 45,
    backgroundColor: "#CE2424",
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
