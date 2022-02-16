import React from "react";
import { Navigate } from "react-router-dom";
// contexts
import { useAuth } from "../contexts/AuthContext";

const RutaPrivada = ({children}) => {
    const {usuario} = useAuth();
    if(usuario){
        return children;
    }else{
        return <Navigate replace to='/inicioSesion'/>;
    }
}
 
export default RutaPrivada;