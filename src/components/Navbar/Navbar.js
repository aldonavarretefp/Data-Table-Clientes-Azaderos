import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.scss';

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
    )
}
