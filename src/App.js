import React from "react";

//React-Router, Protected Route
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


//Styles
import "./App.scss";
//Landing
import Landing from "./components/Landing/Landing";
import { Table } from "./components/Table/Table";
import Login from "./components/Login/Login";
import { Intro } from './components/Intro/Intro';
import { Ubicacion } from './components/Ubicacion/Ubicacion';

function App() {
  return (
    <div>
      <Routes>
        {/* Ruta padre */}
        <Route path="/" element={<Landing />} >
          <Route index path="/" element={<Intro />} />
          <Route path="ubicacion" element={<Ubicacion />} />
        </Route>

        <Route exact path="/login" element={<Login />} />
        <Route path="/clientes" element={<Table/>}/>
        
        <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
      
    </div>
  );
}


export default App;
