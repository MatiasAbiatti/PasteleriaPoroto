
import React, { useState, useEffect} from 'react';
import '../scss/ClickCounter.scss';

const ClickCounter = (defaultCount) => {
    const [clicked, setClicked] = useState('No hizo');
    
    const [count, setCount] = useState(0);
    const onClick = (event) => {
            setClicked(new Date().toString())
            setCount(count + 1);
    };
    useEffect(() => {
        console.log('App mounted');
        return () => {
            console.log('Will unmount')
        }
    },[clicked]);
    useEffect(() => {
        console.log('Received prop',defaultCount)
        return() => {
            console.log('Will receive new prop: name')
        }
    },[defaultCount])
    console.log('Will render');
  return <>
        <div className="clickCounter">
            <p className="clickCounter_title">CONTADOR DE CLICKS</p>
            <ul className="clickCounter_cont-items">
                <li className="clickCounter_cont-items_item amountClick">Cantidad de clicks: <span>{count}</span> </li>
                <li className="clickCounter_cont-items_item lastClick">Último click: <span>{clicked}</span></li>
            </ul>
            <button className="clickCounter_button" onClick={onClick}>CLICKEAME!</button>
        </div>
    </>
};
export default ClickCounter;
