import { ContextCart } from "../../context/ContextCart";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import './Cart.css';


const Cart = () => {
    const {cart, vaciarCart, total, cantidadTotal} = useContext(ContextCart);

    if(cantidadTotal === 0) {
        return(
            <div className="NoCartDiv">
                <h2 className="noHay"> No hay productos en el carrito</h2>
                <Link to="/" className="cartButton"> Comprar </Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Cantidad total: {cantidadTotal}</h3>
            <h3 className="precioTotal">Total: $ {total}</h3>
            <button className="cartButton" onClick={()=> vaciarCart()}> Vaciar Carrito </button>
            <Link to="/checkout" className="cartButton"> Finalizar Compra </Link>
            <Link to="/" className="cartButton"> Seguir Comprando</Link>
        </div>
    )
}

export default Cart