import React from 'react';
import './App.css';
import { Inicio } from './pantallas/inicio';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contacto } from './pantallas/contacto';
import { Proyectos } from './pantallas/proyectos';
import Navbar from './componentes/navegacion';
import { Experiencia } from './pantallas/experiencia';
import { Footer } from './componentes/foot';


function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="d-flex flex-column" style={{minHeight:'100vh'}}>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/experiencia" element={<Experiencia/>} />
          </Routes>
        </div>
        <Footer />
      <footer className='text-center bg-dark text-white p-1 '>
      <p>© 2025 Giuliano Destefanis - Todos los derechos reservados</p>
      </footer>
      </div>
    </Router>
  );
}

export default App;
