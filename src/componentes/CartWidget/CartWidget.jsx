import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../img/carrito.png";
    return (
        <div className='carritoDiv'>
            <img className='carrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 2 </strong>
        </div>
    )
}

export default CartWidget