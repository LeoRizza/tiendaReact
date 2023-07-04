import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ id, nombre, precio, descripcion, img }) => {
    return (
        <Card className='cardLoca'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title style={{ fontWeight: "900" }}>{nombre}</Card.Title>
                <Card.Text>
                    codigo: {id}
                    <br />
                    {descripcion}
                    <br />
                    <strong>precio: $ {precio}</strong>

                </Card.Text>
                <Link className='botonDetalle' to={`/item/${id}`} >detalle</Link>
            </Card.Body>
        </Card>
    );
}

export default Item