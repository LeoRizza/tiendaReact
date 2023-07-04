import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../img/carrito.png";
    return (
        <div>
            <img className='carrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartWidget