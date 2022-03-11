import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../components/Login/Login';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
