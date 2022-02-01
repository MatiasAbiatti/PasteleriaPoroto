import React,{useEffect,useState,useContext} from "react" ;
import { contexto } from "./ContextDemo"


export default function Comp1({carrito,setCarrito}) {

    const { items,ClearAllItems,alertaDemo } = useContext(contexto);

  

    return (
        <>
      <div style={{border:'5px solid #ff0000',padding:'2px',margin:'5px'}}>

          
      </div>

        </>
    );
}