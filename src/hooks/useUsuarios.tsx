import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUsuarios = () => {

    const [usuarios, setusuarios] = useState();
    const url = 'https://reqres.in/api/users?page=2';

    const loadUsuarios =async()=>{
     await axios.get(url)
     .then(response=>{
        setusuarios(response.data.data)
     }).catch(e=>{
        console.log(e);
     })         
    }
    useEffect(()=>{
        loadUsuarios();
    },[])

    // console.log(usuarios);
    return{
      usuarios
    }



}
