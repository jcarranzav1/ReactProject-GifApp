import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);
	return (
		<>
			<h3 className="animate__animated animate__fadeInLeft">{category}</h3>
			{loading && <p className="animate__animated animate__flash">Loading</p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

/* useEffect:
    Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.

    La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se ACTUALICE!!.

    También es posible especificar cuándo se debe ejecutar esta función con un segundo argumento opcional que le podemos pasar.

    Para ello basta con añadir un segundo parámetro a la función, con la lista de los elementos de los que depende. Si el valor de uno de estos elementos que hemos indicado cambia, la función se va a ejecutar con la siguiente actualización.

    Otra posibilidad que nos permite este hook es la de especificar que se ejecute sólo una vez. Esto resulta muy útil si queremos hacer solo una llamada API para usarla en nuestra app.

    Para hacer que se ejecute solo una vez, vata con dejar el array vacio : []
*/

/*
    <GifGridItem key={img.id} {...img} />

    Para poner en contexto, nosotros le estamos enviando un objeto que contiene la imagen:id, title y url. Pero primero hicimos esto:
    
    {images.map((img) => (
		<GifGridItem key={img.id} imagen={img} />
	))}
    
    el img ={img} coloca nuestro objeto img, en otro objeto llamado imagen (puedes ponerle cualquier nombre). A la hora de ir a nuestro componente, deberia hacer la desestructuración asi:

    export const GifGridItem = ({img})

    pero para acceder a sus elementos, sería de poniendo img.id, img.title y img.url. Esto es tedioso y no muy práctico. 

    Una solución es cambiar a esta forma:

    <GifGridItem key={img.id} {...img} />

    Esto ya realiza la desestructuracion y cuando le hacemos un console.log en nuestro componente vemos que recibimos nuestro objeto img. Aquí ya podriamos poner nuestro componente así:
    
    export const GifGridItem = ({id,title, url}).

    En este ejemplo, es como si usuramos doble desestruccturacion, uno en el GiftGrid (donde llamamos al componente) y otro en GifGridItem (el componente propiamente dicho).
    

*/

/*
	const [images, setImages] = useState([]);
	useEffect(() => {
		getFetchGifs(category).then(setImages);
	}, [category]);
 	

	getFetchGifs(category).then((imgs) => setImages(imgs));
	si la promesa retorna el unico elemento del then, entonces podemos escribir la funcion sola.

	getFetchGifs(category).then(setImages);
	recuerda getFetchGifs es un async y este retorna una promesa
*/
