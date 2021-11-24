import React from 'react'
import { View, Text } from 'react-native';
import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interface/UsuarioInterface';



export const ListUsersScreen = () => {
    
 

    const {usuarios}=useUsuarios();
   
    console.log(usuarios);

    

    return (
        <View>
            <Text>Hola esto es la lista de usuarios </Text>
              <Text>{JSON.stringify(usuarios)}</Text> 
           <Text></Text>
        </View>
    )
}
