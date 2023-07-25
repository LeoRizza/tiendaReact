import { useContext } from "react";
import { ContextCart } from "../../context/ContextCart";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(ContextCart)
    
    return (
        <div>
            <h4> {item.nombre} </h4>
            <h6> Cantidad: {cantidad}</h6>
            <h6> Precio: {item.precio} </h6>
            <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        </div>
    )
}

export default CartItem