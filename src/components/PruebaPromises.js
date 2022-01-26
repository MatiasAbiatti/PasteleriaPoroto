import React ,{useEffect,useState}from "react" ;

export default function PruebaPromises () {
	
		const [count, setCount] = useState(0);
		// De forma similar a componentDidMount y componentDidUpdate
		const [productos,setProductos] = useState ([false]) ;
		const [stock,setStock] = useState([]) ;
		useEffect(() => {
		  // Actualiza el título del documento usando la API del navegador
			const PruebaPromises = new Promise((resolve,reject )=>{
				setTimeout(() => {
						resolve(setProductos(['Pan', 'Facturas', 'Pastel']))
						
				}, 1000);
			
		})
		  document.title = `You clicked ${count} times`;
		});
	  //console.log(productos,'products')
		return (
		  <div>
			<p>Clickeaste {count} Veces</p>
			<button onClick={() => setCount(count + 1)}>
			  Clickeame
			</button>
		  </div>
		);
}
 
 
  task = new Promise ((resolve, reject) => {
	let buscandoCaca = setInterval(()=> {
	 console.log('ESPERANDO ...')
		setTimeout(()=> {
			resolve(true);
			console.log('LISTO MOSTRANDO CACA ...')
			clearInterval(buscandoCaca);
		},3000)
	},1000)
	
} )
<<<<<<< HEAD
task.then( caca => {
	
	console.log(caca,'caca2');
})
=======
// task.then(res) => {

	//setProdutos(res);
	// console.log(caca,'caca2');
>>>>>>> 064ca10 (Primer entrega proyecto final)
