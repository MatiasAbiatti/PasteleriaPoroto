import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import '../scss/components/ItemListContainer.scss';
import ItemList from './ItemList';


export default function ItemListContainer() {

    const { userId } = useParams();
        useEffect( () => {
            console.log('recibio userId de:', userId);
            return() => {
                console.log('va a cambiar el userId:', userId);
            }
        },[userId]);
        
        const [arrayDeProductos, setArrayDeProductos] = useState([]);
        
        const productosEnStock = new Promise ((resolve,reject) => {
            setTimeout(()=> {
                resolve(
                    [
                        {id: 1, title:'Medialunas Saladas', description:'Las mejores medialunas', price:'100', pictureUrl:"images/Medialunas.jpg", stock:"5"},
                        {id: 2, title:'Tortitas Negras', description:'Masa suave y esponjosa', price:'200', pictureUrl:"images/Tortitas-negras.png", stock:"15"},
                        {id: 3, title:'Vigilantes', description:'Alargados y crocantes', price:'300', pictureUrl:"images/Vigilantes.jpg", stock:"25"},
                        {id: 4, title:'Medialunas Dulces', description:'Cubiertas del mejor baño de caramelo', price:'400', pictureUrl:"images/Medialunas.jpg", stock:"35"},
                        {id: 5, title:'Bizcochos', description:'De grasas', price:'500', pictureUrl:"images/bizcochitos.jpg", stock:"22"},
                        {id: 6, title:'Donas', description:'Rosquillas', price:'600', pictureUrl:"images/Donas.png", stock:"11"},
                        {id: 7, title:'Cañonsitos', description:'Masa rellena', price:'700', pictureUrl:"images/canoncitos.jpg", stock:"2"},
                        {id: 8, title:'Palmeritas', description:'Galletita dulce tipo palmera', price:'800', pictureUrl:"images/palmeritas.jpg", stock:"42"},
                        {id: 9, title:'Torta Frutilla', description:'Torta de frutilla', price:'900', pictureUrl:"images/torta-frutilla.jpg", stock:"45"},
                        {id: 10, title:'Torta chocolate', description:'Torta de chocolate', price:'1000', pictureUrl:"images/torta-chocolate.jpg", stock:"65"},
                        {id: 11, title:'Torta combinada', description:'Torta combinada', price:'1100', pictureUrl:"images/torta-marmolada.jpg", stock:"55"},
                        {id: 12, title:'Pastaflora', description:'Pastaflora', price:'1200', pictureUrl:"images/Pastaflora.jpg", stock:"3"}
                    ]
                );
            },2000);
        })
        useEffect( () => {
            productosEnStock
                .then(res => {
                    setArrayDeProductos(res);
                 // res=res.filter(item=>item.category=== category)
                    
                })
                .catch(err => {
                    console.log(err);
                })
        })
        return <>
          <div className="listContainer">
        {loading ? <Loader /> : <ItemList products={products} />}
      </div>
            <div className="cont-home">
                <ItemList items={arrayDeProductos}/>
            </div>
        </>
}

