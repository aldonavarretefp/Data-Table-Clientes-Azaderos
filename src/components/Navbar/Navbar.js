import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { Link } from 'react-router-dom';

/**
 * Productos
 * Sobre Nosotros
 * Contacto
 * Como llegar
 * Precios
 * Hazte Cliente
 */
export const Navbar = () => {
    return (
<<<<<<< HEAD
        <nav className="navbar">
            <div className="navbar-logo" >Azaderos</div>
            <ul>
                <li className="navbar-item active"><Link to="ubicacion" className="navbar-link">Productos</Link></li>
                <li className="navbar-item">Sobre Nosotros</li>
                <li className="navbar-item">Contacto</li>
                <li className="navbar-item">Como llegar</li>
                <li className="navbar-item">Precios</li>
                <li className="navbar-item">Hazte Cliente</li>
            </ul>

            <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

        </nav>
=======
        <div className="topBar">
            <div className="wrapper">
                <div className="left">
                    <a href="/" className="logo">Azaderos</a> 
                </div>
                
                {/* Right */}
                <div className="right">
                    <ul className='nav-links'>
                        <Link to="ubicacion" clasName='nav-link'>Ubicacion</Link>

                    </ul>
                </div>
            </div>
        </div>
>>>>>>> 882ae33020184339f801972cb3106b5607402a0d
    )
}
