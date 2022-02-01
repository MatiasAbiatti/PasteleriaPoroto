import React, { useEffect, useState, useContext } from "react";
import { contexto } from "./ContextDemo";


export default function Comp2({ carrito, setCarrito }) {


  const { alertaDemo } = useContext(contexto);

  return (
    <>
      <>
        <div
          style={{ border: "5px solid #ff0000", padding: "2px", margin: "5px" }}
        >
          {Items.map((item) => (
            <h2 key={item.id}>{item.producto} </h2>
          ))}
        </div>
      </>
      <button OnClick={() => setCarrito([...carrito, "Agregaste3"])}>
        Agregar+3
      </button>
    </>
  );
}
