import React, { useState, useEffect} from 'react';

import '../scss/components/ItemCount.scss';

export default ItemCount;


function ItemCount({ stock, initial,  onAdd }) {

    

    const ItemCount = ({ stock, initial, onAdd }) => {
      
        const [contador, setContador] = useState(initial);
      
        const aumentarContador = () => {
          if (contador <= stock) setContador(contador + 1);
        };
      
        const disminuirContador = () => {
          if (contador > initial) setContador(contador - 1);
        };
      
        return (
          <div className="itemCount">
            <button onClick={disminuirContador}>-</button>
      
            <b>{contador}</b>
      
            <button onClick={aumentarContador}>+</button>
            <button onClick={() => onAdd(contador)}>Add to cart</button>
          </div>
        );
      }
      
      export default ItemCount;

    
    function CarritoPre() {
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Click Aca
            </Button>
            <div style={{minHeight: '150px'}}>
              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{width: '400px'}}>
                   Estas agregando este producto a tu carrito,asegurate de tener todo!  
                  </Card>
                </div>
                <CloseButton />
              </Collapse>
            </div>
          </>
        );
      }
      
      render(<CarritoPre/>);
    
    
    
    

  