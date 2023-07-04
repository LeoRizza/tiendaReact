import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

        <header>
            <Link className='logo' to="/">
                <h1>SABROSON</h1>
            </Link>


            <nav>
                <ul>
                    <li>
                        <NavLink className="estiloCat" to="/categoria/2"> Pizzas </NavLink>
                    </li>
                    <li>
                        <NavLink className="estiloCat" to="/categoria/3"> Empanadas </NavLink>
                    </li>
                </ul>
            </nav>
            
            <CartWidget/>
        </header>

    )
}

export default NavBar