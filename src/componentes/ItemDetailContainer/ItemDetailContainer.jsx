import { useState, useEffect } from "react"
/* import { getUnProducto } from "../../asyncmock" */
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../data/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect ( () =>{
        const nuevoDoc = doc(db, "inventario", idItem)

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const newProduct = {id: res.id, ...data}
                setProducto(newProduct)
            })
            .catch(error => console.log(error))
    }, [idItem])
    /* useEffect ( () => {
        getUnProducto(idItem)
        .then(result => setProducto(result))
    }, [idItem]) */
    
    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer