import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, descripcion, img }) => {
    return (
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
        </Card>
    )
}

export default ItemDetail