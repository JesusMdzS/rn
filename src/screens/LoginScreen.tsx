import axios from 'axios'
import React, { useState } from 'react'
import { View ,Text, StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native'

export const LoginScreen = () => {   
    const [state, setstate] = useState({
            email:'',
            password:''
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
        // await axios.post('https://reqres.in/api/login')
   
       Alert.alert(
        "Datos enviados",
        "ahuevo papi",
    )
    console.log("se envió la  info :"+ state.email+ "-y-"+ state.password);
    }
    return (
        <View style={style.container}>
            <View style={style.containerTwo}>
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
                                style={style.button}    
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
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    containerTwo:{
        flex:0.5,
        backgroundColor:'#261361',
        justifyContent: 'center',
         alignItems: 'center'
    },
    formContainer:{
        position:'absolute',
        width:'80%',
        top:'40%',
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
    textCuenta:{
        paddingTop:40,
        fontSize:25,
        fontWeight: "bold",
        paddingLeft:'15%',
       
    },
    form:{
        marginTop:20,
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
    button:{
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
