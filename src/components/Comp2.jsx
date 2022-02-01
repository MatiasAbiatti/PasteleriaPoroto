import React,{useEffect,useState,useContext} from "react" ;
import { contexto } from "./ContextDemo"


export default function Comp2({carrito,setCarrito}) {

   

     const { alertaDemo } = useContext(contexto);

    return (
        <>
     
     <div style={{border:'5px solid #ff0000',padding:'2px',margin:'5px'}}>


         </div>

        </>
    );
}