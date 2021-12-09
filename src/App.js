import React, { useEffect, useState } from "react";
import axios from 'axios';

//React-Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Styles
import "./App.scss";
//Landing
import Landing from "./components/Landing/Landing";
import { Table } from './components/Table/Table';
import Login from './components/Login/Login';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={
          <Login/>
        } 
        />
        <Route path="/home"
          element={
            <Landing/>
          }
        />
        <Route exact path="/clientes"
          element={
            <Table/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
