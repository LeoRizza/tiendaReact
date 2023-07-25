import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext, useEffect } from "react";
import { ContextCart } from "../../context/ContextCart";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, descripcion, img, stock}) => {
    const [agregarCant, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(ContextCart)

    const handlerCant = (cantidad) => {
        setAgregarCantidad(cantidad);
        /* console.log("Producto agregado: " + cantidad); */
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad)
    }

    return (
        <div>
            <Card style={{ background: "rgb(240, 241, 222)" }}>
            <Image className="imgDetalle" src={img} fluid />
            <Card.Body className="cardDetalle2">
            <Card.Title style={{ fontSize: '2em' }}>{nombre}</Card.Title>
                    codigo: {id}
                    <br />
                    {descripcion}
                    <br />
                    <strong> precio: $ {precio} </strong> 
            </Card.Body>
            {
            agregarCant > 0 ? (<Link to="/cart">terminar</Link>) : (<ItemCount inicial = {1} stock={stock} funcionAgregar={handlerCant}/>)
        }
        </Card>
        </div>
    )
}

export default ItemDetail