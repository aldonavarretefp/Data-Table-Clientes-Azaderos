import React from "react";

//React-Router, Protected Route
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";



//Landing
import Landing from "./components/Landing/Landing";
import { Table } from "./components/Table/Table";
import Login from "./components/Login/Login";
import { Intro } from './components/Intro/Intro';
import { Ubicacion } from './components/Ubicacion/Ubicacion';

import './App.scss';  
import AppRouter from './routers/AppRouter';
export const AzaderosApp = () => {
  return (
    <AppRouter/>
  );
}
