import React from 'react';
import './App.css';
import { Inicio } from './pantallas/inicio';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contacto } from './pantallas/contacto';
import { Proyectos } from './pantallas/proyectos';
import Navbar from './componentes/navegacion';
import { Experiencia } from './pantallas/experiencia';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/experiencia" element={<Experiencia/>} />
      </Routes>
    </Router>
  );
}

export default App;
