import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export const MenuScreen = (route) => {
  const id = 1;
  const params = route.params;
  const userAccount = () => {
    if (params.id === "1") {
      return (
        <View style={style.bodyCards}>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="person" size={30} color="#8d8d8d" />
              <Text>Usuario</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="people" size={30} color="#8d8d8d" />
              <Text>Empleados</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="business" size={30} color="#8d8d8d" />
              <Text>Obras/Proyectos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="cart" size={30} color="#8d8d8d" />
              <Text>Proveedores</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="cog" size={30} color="#8d8d8d" />
              <Text>Herramienta/Maquinaria</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (params.id === "2") {
      return (
        <View style={style.bodyCards}>
          <TouchableOpacity style={style.box}>
            <View style={style.inner}>
              <Icon name="cog" size={30} color="#8d8d8d" />
              <Text>Herramienta/Maquinaria</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <ScrollView style={style.scrollView}>
      <View style={style.header}>
        <Text style={style.text}>
          Enfocados en la construccion, operación, mantenimiento, financiamiento
          y promoción de infraestructura
        </Text>
      </View>
      <View style={style.stadistic}>
        <Text style={{ fontSize: 50 }}>
          Estadisticas de obra en el mes y de empleados
        </Text>
      </View>

      {userAccount()}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  stadistic: {
    backgroundColor: "white",
    height: 600,
    width: Dimensions.get("window").width,
    marginTop: 5,
  },
  nose: {
    backgroundColor: "#261361",
    height: 300,
    width: 300,
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: "#261361",
    flex: 5,
  },
  header: {
    height: 100,
    backgroundColor: "#261361",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },

  bodyCards: {
    height: 500,
    backgroundColor: "#261361",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  box: {
    width: "50%",
    height: 150,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
