import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useUsuarios } from "../hooks/useUsuarios";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

export const ListUsersScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const url = "http://listadetandas.herokuapp.com/api/";

  const getUser = async () => {
    await axios.get(url).then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    });
  };

  const Edit = (id) => {
    navigation.navigate("userUpdateForm", {
      idpersona: id,
    });
  };

  const deleteUser = async (id) => {
    let formData = new FormData();
    formData.append("METHOD", "DELETE");
    await axios.post(url + "?id=" + id, formData).then((res) => {
      console.log(res.data);
      getUser();
      Alert.alert("Usuario eliminado exitosamente");
    });
  };

  const listItems = data.map((persona) => {
    return (
      <View key={persona.id} style={style.container}>
        <Text style={style.text}>ID: {persona.id}</Text>
        <Text style={style.text}>
          Nombre: {persona.nombre} {persona.apellidoPaterno}{" "}
          {persona.apellidoMaterno}
        </Text>
        <Text style={style.text}>Email: {persona.email}</Text>
        <Text style={style.text}>Contraseña: {persona.password}</Text>
        <Text style={style.text}>Tipo de usuario: {persona.id}</Text>
        <Text style={style.text}>Creación: 09/03/20</Text>
        <Text style={style.text}>Modificación: 10/05/21</Text>
        <View style={style.buttons}>
          <TouchableOpacity style={style.edit} onPress={() => Edit(persona.id)}>
            <Icon name="pencil" size={30} color="#8d8d8d" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.delete}
            onPress={() => deleteUser(persona.id)}
          >
            <Icon name="trash" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  useEffect(() => {
    getUser();
  }, []);

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
