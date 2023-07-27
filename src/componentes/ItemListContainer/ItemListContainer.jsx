import { useState, useEffect } from "react";
/* import { getProductos, getProductosPorCat } from "../../asyncmock"; */
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../data/config";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect ( () => {
        const products = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

        getDocs(products)
            .then(res=> {
                const newProducts = res.docs.map( doc=> {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(newProducts);
            })
            .catch(error=> console.log(error))

    }, [idCategoria])

    /* useEffect( () => {
        const funcion = idCategoria ? getProductosPorCat : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))
    }, [idCategoria]) */

    return (
        <>
        <h2 className="tituloGreeting"> {props.greeting} </h2>
        <ItemList productos={productos}/>
        </> 
    )
}

export default ItemListContainer