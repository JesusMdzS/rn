import { useEffect, useState } from "react";
import axios from "axios";

export const useUsuarios = () => {
  const [usuarios, setusuarios] = useState([]);
  // const url = "https://reqres.in/api/users?per_page=12";
  const url = "http://192.168.100.6/API/users.php";

  const loadUsuarios = async () => {
    await axios
      .get(url)
      .then((response) => {
        // setusuarios(response.data.data);
        setusuarios(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    loadUsuarios();
  }, []);

  // console.log(usuarios);
  return {
    usuarios,
  };
};
