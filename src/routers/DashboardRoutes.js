import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Ubicacion } from '../components/Ubicacion/Ubicacion';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                        <Route path="ubicacion" element={<Ubicacion />} />
                        {/* <Route path="marvel" element={<MarvelScreen />} />
                        <Route path="search" element={<SearchScreen />} />
                        <Route path='hero/:heroeId' element={<HeroScreen/>} /> */}
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
