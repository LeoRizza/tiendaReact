import { useContext, useState, useEffect } from "react";
import { ContextCart } from "../../context/ContextCart";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../data/config";
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(ContextCart);
    const [imageURL, setImageURL] = useState("");
    const idItem = item.id;

    useEffect(() => {
        const fetchImageURL = async () => {
            const nuevoDoc = doc(db, "inventario", idItem);

            try {
                const res = await getDoc(nuevoDoc);
                const data = res.data();
                const newProduct = { id: res.id, ...data };
                setImageURL(newProduct.img);
            } catch (error) {
                console.log(error);
            }
        };

        fetchImageURL();
    }, [idItem]);

    return (
        <div className="itemCart">
            <img className="imgCart" src={imageURL} alt={item.nombre} />
            <div>
                <h4> {item.nombre} </h4>
                <h6> Cantidad: {cantidad}</h6>
                <h6> Precio: {item.precio} </h6>
                <button className="eliminarButton" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem;
