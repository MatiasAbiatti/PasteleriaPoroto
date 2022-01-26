import { BrowserRouter, Switch , Route ,Link , UseParams } from 'react-router-dom' ;
import React ,{useEffect,useState}from "react" ;

export default function Categoria() {

    const {categoriaid} = useParams();

    const [arrayDeProductos,setArrayDeProductos] = useState ([{name:'Pan sin sal,'categoria:'Pan'},{name:'Medialunas,'categoria:'Dulce'}])

    useEffect(()=>{

        setArraydeProductos(ArrayDeProductos.filter(item =>item.categoria==categoriaId));

    
        console.log('categoriaId');

        new Promise
        .then("Aca cargamos los priductos")

    }, [categoriaId])

    return (
        <>

        <Link to={"/categoria/:categoriaId"} >Panaderia</Link>

        Estoy en la categoria {categoriaId}
        {
                arrayDeProductos.map(item =><div>{item.name}</div>)
 
        }
 
        </>
    )
}
