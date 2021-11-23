import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const MenuScreen = () => {
     var id = 2;


    const userAccount=()=>{
        if(id===1){
            return(
                <View style={style.bodyCards}>
                    
                <TouchableOpacity style={style.box}>
                    <View style={style.inner}>
                        <Text>Empleados</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.box}>
                    <View style={style.inner}>
                        <Text>Obras/Proyectos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.box}>
                    <View style={style.inner}>
                        <Text>Proveedores</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.box}>
                    <View style={style.inner}>
                        <Text>Herramienta/Maquinaria</Text>
                    </View>
                </TouchableOpacity>
               
                </View>
            )
        }else if(id===2){
            return(
                <View style={style.bodyCards}>
                <TouchableOpacity style={style.box}>
                <View style={style.inner}>
                    <Text>Herramienta/Maquinaria</Text>
                </View>
                </TouchableOpacity>
             </View>
            )
            
        }
    }


    return (
        <View style={style.container}>
            <View style={style.headerButton}>
                <TouchableOpacity style={style.Button}>
                    <Text style={style.text}>Página principal </Text>
                </TouchableOpacity>
            </View>
            {userAccount()}
                                        
           
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    headerButton:{
        height:'20%',
        backgroundColor:'white',
        justifyContent: 'center',
         alignItems: 'center'
    },
    Button:{
        padding: 10,
        borderRadius:10,
        width:"80%",
        height:50,
        backgroundColor:'#261361',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        color:'white'
    },
    bodyCards:{
        height:'80%',
        backgroundColor:'#261361',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
    },
    box:{
        width:'50%',
        height:'33%',
        padding:5,
     
    },
    inner:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20

    }
})

