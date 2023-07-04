import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Sabor Sabroson"} />} />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={"Sabor Sabroson"} />} />
      <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
      <Route path="*" element={ <h2>Sitio en Construccion</h2> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App