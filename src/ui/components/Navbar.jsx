import { NavLink } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <li className='navbar-item'>
                    <NavLink className={" navbar-link"} to={"/"}>
                        <i className="bi bi-house"></i>
                        Inicio
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink className={"navbar-link"} to={"cart"}>
                        <i className='bi bi-cart'></i>
                        Carrito 
                    </NavLink>
                </li>
            </ul>
            <ul className='right-navbar-items'>
                <li className='navbar-item'>
                    <NavLink className={"navbar-link"} to={"login"}>
                        <i className="bi bi-person-fill"></i>
                        Iniciar sesion
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
