import React, { useEffect, useState } from "react";

export default function ListadoDeProductos() {

  const [arrayDeProductos, setarrayDeProdcutos] = useState([]);
}

useEffect(() => {});


setarrayDeProductos([{name:'Mojito'},{name:'Tequila'},{name:'Ron'}])

fetch('https://fakestoreapi.com/products')
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then((json) => {
          console.log(json);
          setData(json);
      });

  return (
      <>
     {arrayDeProductos.map(item=> {
        {items.length === 0 ? (
            <p>Cargando...</p>
            
            )} 


     }
      </>
  ) } ;
