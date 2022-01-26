import React, { useState, useEffect} from 'react';

import '../scss/components/ItemCount.scss';

function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar 
    const [cant, setCant] = useState(initial);
    
    const onClickAdd = (event) => {
        if( cant < stock ){
            setCant(parseInt(cant) + 1);
        }
    };
    const onClickMin = (event) => {
        if(cant > initial ) {
            setCant(parseInt(cant) - 1);
        }
    };
    const OnAdd = (event) => {
        alert('La cantidad a agregar es: ',cant)
    }
    return <>
        <div className="ItemCount">
            <div className="ItemCount-cont"> 
                <button className="ItemCount_button" onClick={onClickMin}>-</button>
                <input className="ItemCount_input" readOnly value={cant}></input>
                <button className="ItemCount_button" onClick={onClickAdd}>+</button>
            </div>
            <div className="ItemCount_buttonAdd" onClick={OnAdd}>Agregar al carrito</div>
        </div>
    </>
   }
export default ItemCount;   