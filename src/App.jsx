import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from './components/LoginComponent/LoginComponent';
import RegistroComponent from "./components/RegistroComponent/RegistroComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import ReprobadosComponent from "./components/ReprobadosComponent/ReprobadosComponent";

function App() {
return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LoginComponent/>}/>
      <Route exact path="/registro" element={<RegistroComponent/>}/>
      <Route exact path="/usuarios" element={<WelcomeComponent/>}/>
      <Route exact path="/calificaciones" element={<ReprobadosComponent/>}/>
      </Routes>
  </Router>
  
);

}

export default App

// // FRONTEND PROYECTO Anime University
// PARA LA MATERIA DE BASE DE DATOS /UTM 17-07-24
// Copyright © 2024 Eduardo Antonio Uc Tut. Este proyecto fue elaborado por Eduardo Antonio Uc Tut y se ofrece para fines educativos y de práctica. Se concede permiso para su uso libre, con la condición de que se reconozca la autoría original de Eduardo Antonio Uc Tut en cualquier redistribución o modificación. Este proyecto se proporciona tal cual, sin garantías de ningún tipo, expresas o implícitas.
