import React, { useState, useEffect, createContext } from "react";

export const contexto = createContext();

export default function ContextDemo({ children }) {

    
    const item = [items,setItems] =useState ([]);

    const ClearAllItems = () => setItems([])
    
    function alertaDemo(){
        alert('alerta prueba');
    }

    return (
        <>
            <contexto.Provider value={{alertaDemo,items}}> 
                {children}
            </contexto.Provider> 

        </>
    );
}