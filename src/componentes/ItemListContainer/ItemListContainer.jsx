import { useState, useEffect } from "react";
import { getProductos, getProductosPorCat } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const funcion = idCategoria ? getProductosPorCat : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))
    }, [idCategoria])

    return (
        <>
        <h2 className="tituloGreeting"> {props.greeting} </h2>
        <ItemList productos={productos}/>
        </> 
    )
}

export default ItemListContainer