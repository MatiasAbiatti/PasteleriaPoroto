import React from "react";
import '../scss/components/itemDetail.scss';
import {useEffect} from 'react'; 
import {useParams} from 'react-router-dom';
export default function ItemDetail({item}) {
    
    const { userId } = useParams();
    useEffect( () => {
        console.log('recibio userId de:', userId);
        return() => {
            console.log('va a cambiar el userId:', userId);
        }
    },[userId]);

    return (
        <div className="itemDetail__cont">
            <div className="itemDetail__img">
                <img alt="" src={item.pictureUrl}></img>
            </div>
            <div className="itemDetail__info">
                <span className="itemDetail__title">{item.title}</span>
                <p className="itemDetail__description">Descripcion breve: {item.description}</p>
                <label className="itemDetail__price">Precio: $ {item.price}</label>
            </div>
        </div>
    );
}