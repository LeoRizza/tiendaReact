import { ContextCart } from "../../context/ContextCart";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";


const Cart = () => {
    const {cart, vaciarCart, total, cantidadTotal} = useContext(ContextCart);

    if(cantidadTotal === 0) {
        return(
            <>
                <h2> No hay productos en el carrito</h2>
                <Link to="/"> Comprar </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: $ {total}</h3>
            <h3>Cantidad total: {cantidadTotal}</h3>
            <button onClick={()=> vaciarCart()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra</Link>
        </div>
    )
}

export default Cart