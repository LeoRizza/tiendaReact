import { useState, useContext } from "react";
import { ContextCart } from "../../context/ContextCart";
import { db } from "../../data/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart, vaciarCart, total } = useContext(ContextCart);

    const handlerForm = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !email || !telefono || !emailConfirm) {
            setError("Por favor, completar todos los campos");
            return;
        }

        if (emailConfirm !== email) {
            setError("Los email no coinciden");
            return;
        }

        const orden = {
            items: cart.map(product => ({
                id: product.item.id,
                nombre: product.item.nombre,
                cantidad: product.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        vaciarCart();
                    })
                    .catch((error) => {
                        console.log("error al crear la orden", error);
                        setError("error al crear la orden, vuelva a intentarlo");
                    });
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handlerForm}>
                {
                    cart.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <strong> $ {producto.item.precio} </strong>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <h2 className="precioTotal">Precio total: $ {total}</h2>
                </div>
                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confiracion Email</label>
                    <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>
                {
                    error && <p> {error} </p>
                }

                <button type="submit" className="checkoutButton"> Finalizar compra </button>
            </form>
            {
                orderId && (
                    <strong> ¡Gracias por tu compra! Tu numero de orden es {orderId} </strong>
                )
            }
        </div>
    )
}

export default Checkout