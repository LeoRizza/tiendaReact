import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ id, nombre, precio, descripcion, img, stock }) => {
    return (
        <Card className='cardLoca'>
            <Card.Img variant="top" className='detalleImg' src={img} />
            <Card.Body style={{ position: "relative"}}>
                    <div className='dataCard'>
                        <p>codigo: {id}</p>
                        <p>stock: {stock} </p>
                    </div>
                <Card.Title style={{ fontWeight: "900" }}>{nombre}</Card.Title>
                <Card.Text>
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