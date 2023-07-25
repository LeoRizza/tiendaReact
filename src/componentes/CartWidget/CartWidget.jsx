import { ContextCart } from '../../context/ContextCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(ContextCart);
    const imgCarrito = "../img/carrito.png";
    return (
        <div className='carritoDiv'>
            <Link to="/cart">
                <img className='carrito' src={imgCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget