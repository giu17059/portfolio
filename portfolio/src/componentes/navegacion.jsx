import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemNav } from './itemNav';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'

function Navbar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/">GD</Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex text-center justify-content-lg-end">
                <li className="nav-item pe-3">
                    <Link className={`nav-link  ${location.pathname === '/' ? 'itemsNavActivo' : 'itemsNav'}`} to="/">Sobre Mi</Link>
                </li>
                <li className="nav-item pe-3">
                    <Link className={`nav-link  ${location.pathname === '/proyectos' ? 'itemsNavActivo' : 'itemsNav'}`} to="/proyectos">Proyectos</Link>
                </li>
                <li className="nav-item pe-3">
                    <Link className={`nav-link  ${location.pathname === '/experiencia' ? 'itemsNavActivo' : 'itemsNav'}`} to="/experiencia">Experiencia</Link>
                </li>
                <li className="nav-item pe-3 me-lg-2">
                    <Link className={`nav-link  ${location.pathname === '/contacto' ? 'itemsNavActivo' : 'itemsNav'}`} to="/contacto">Contacto</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>



    );
}

export default Navbar;
