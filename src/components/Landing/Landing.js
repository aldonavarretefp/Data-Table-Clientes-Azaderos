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
<<<<<<< HEAD
            
            {/* 
            <div>
=======
            <p>
>>>>>>> 882ae33020184339f801972cb3106b5607402a0d
                Hola
                <Link
                    to="ubicacion"
                    className="btn btn-primary"
                >Ubicacion</Link>
<<<<<<< HEAD
            </div>
            */}
=======
            </p>

>>>>>>> 882ae33020184339f801972cb3106b5607402a0d
            
        </div>
        
    )
}

export default Landing;
