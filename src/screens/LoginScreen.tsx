import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import React, { useState } from 'react'
import { View ,Text, StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native'



export const LoginScreen = () => {   

    const navigation = useNavigation();


    const [state, setstate] = useState({
            email:'',
            password:'',
    })

    const onChange =(value:string, campo:string)=>{
        setstate({
            ...state,
            [campo]: value,
        });    
    }

    const getData =()=>{
        
        if(!state.email || !state.password){
            console.log("llena tus datos");
            Alert.alert(
                "Intenta de nuevo",
                "Debes ingresar todos tus datos",
            )
        }else{
            
            sendData();
        }      
    }

    const sendData = async()=>{
        //ESTO SIGUE EN PRUEBAS HASTA QUE LA API ESTE HECHA
        //MANDO LA ID COMO UN PARAM PARA DETERMINAR UN ID DE ROL Y COMPROBAR FUNCIONALIDAD EN LA 
        //SCREEN DE MENU
         navigation.navigate('MenuScreen',{
             id:state.password
         });
        // await axios.post('https://reqres.in/api/login')
        
        //    Alert.alert(
        //     "Datos enviados",
        //     "Se enviaron correctamente",
        // )
    console.log("se envió la  info :"+ state.email+ "-y-"+ state.password);
    }



    return (
        <View style={style.container}>
            <View style={style.containerTwo}>
                <View style={style.chingadera}>
                <View style={style.formContainer}>
                    <Text style={style.textCuenta}>Ingresa a tu cuenta</Text>
                        <View style={style.form}>
                             <TextInput 
                                style={style.input}
                                placeholder="Ingresa tu correo"
                                keyboardType="email-address"
                                value={state.email}
                                onChangeText={(e)=>onChange(e,'email')}
                                
                                
                            ></TextInput>
                            <TextInput 
                                style={style.input}
                                placeholder="Ingresa  tu contraseña"
                                secureTextEntry={true}
                                value={state.password}
                                onChangeText={(e)=>onChange(e,'password')}                         
                            ></TextInput>
                            <View>
                             <TouchableOpacity
                                style={style.buttonx}    
                                onPress={getData}
                               
                            >
                                <Text style={{
                                    color:'white',
                                    fontSize:18,
                                }}>Inicia sesión</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                </View>
                </View>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'white',
        
    },
    containerTwo:{
        height:'50%',
        backgroundColor:'#261361',
        justifyContent: 'center',
         alignItems: 'center',
   
    },
    formContainer:{
        
        width:259,
        height:360,
        borderRadius:20,
        backgroundColor :'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
        
    },
    chingadera:{
        marginTop:'40%'
    },
    textCuenta:{
        paddingTop:40,
        fontSize:25,
        fontWeight: "bold",
        // paddingLeft:'15%',
        textAlign:'center'
       
    },
    form:{
        width:'100%'
        },
    input:{
        
        height: 55,
        margin: 12,
        borderColor: "#E5E5E5",
        borderRadius:10,
        borderWidth: 0,
        padding: 20,  
        fontSize:15,
        backgroundColor:'#EDEDED'
    },
    buttonx:{
        marginLeft:'10%',
        marginTop:10,
        width:"80%",
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#261361",
        padding: 10,
        borderRadius:10,
        
    }
})
