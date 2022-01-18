import React from 'react'
import { Outlet } from 'react-router';

import { Navbar } from '../Navbar/Navbar';

import './Landing.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing-container">
            <Navbar />
            <section>
                <Outlet />
            </section>            
            <p>
                Hola
                {/* Exact path */}
                <Link
                    to="ubicacion"
                    className="btn btn-primary"
                >Ubicacion</Link>
            </p>

            
        </div>
        
    )
}

export default Landing;
