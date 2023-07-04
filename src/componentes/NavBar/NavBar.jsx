import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const cerrarMenu = () => {
        setMenuVisible(false);
    };

    const abrirMenu = () => {
        setMenuVisible(true);
    };

    return (
        <header>
            <Link className='logo' to="/">
                <h1>SABROSON</h1>
            </Link>

            <nav className={`nav ${menuVisible ? 'visible' : ''}`}>
                <button className='cerrarMenu' onClick={cerrarMenu}><img className='icono' src="../img/close.png" alt="close" /></button>
                <ul className='navl'>
                    <li>
                        <NavLink className="estiloCat" to="/categoria/2">Pizzas</NavLink>
                    </li>
                    <li>
                        <NavLink className="estiloCat" to="/categoria/3">Empanadas</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </nav>

            <button className='abrirMenu' onClick={abrirMenu}><img className='icono' src="../img/burger.png" alt="burger" /></button>
        </header>
    );
};

export default NavBar;
