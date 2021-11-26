import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export const MenuScreen = ({ route }) => {
  const navigation = useNavigation();

  const params = route.params;
  const userAccount = () => {
    if (params.id === "1") {
      return (
        <View style={style.bodyCards}>
          <TouchableOpacity
            style={style.box}
            onPress={() => navigation.navigate("ListUsersScreen")}
          >
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
      <Text
        style={{
          fontSize: 25,
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Obras en el mes
      </Text>
      <LineChart
        data={{
          labels: ["week 1", "week 2", "week 3", "week 4"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={240}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Historico de empleados
      </Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={240}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

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
