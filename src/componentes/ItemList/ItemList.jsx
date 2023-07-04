import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
    return (
        <div className="contenedorProductos">
            {productos.map(comida => <Item key={comida.id} {...comida} />)}
        </div>
    )
}

export default ItemList