import { useContext } from "react";
import { ContextCart } from "../../context/ContextCart";
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(ContextCart)
    
    return (
        <div className="itemCart">
            <img src={item.img} alt={item.nombre}/>
            <div>
                <h4> {item.nombre} </h4>
                <h6> Cantidad: {cantidad}</h6>
                <h6> Precio: {item.precio} </h6>
                <button className="eliminarButton" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem