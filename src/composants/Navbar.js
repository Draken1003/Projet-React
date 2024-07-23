import { useEffect, useState, onClick } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Button from './common/ButtonConnexion';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {

    return(
        <div class=" navbar-container px-5 " style={{backgroundColor:"#181C20", zIndex:1}}>
          <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Image</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-flex justify-content-around align-items-lg-center">
                  <li className="nav-item h5 px-2" >
                    <NavLink className='lien' to="/home">Accueil</NavLink>
                  </li>
                  <li className="nav-item h5 px-2">
                    <NavLink className='lien' to="/cours">Cours</NavLink>
                  </li> 
                  <li className="nav-item h5 px-2">
                    <NavLink className='lien' to="/exercice">Exercice</NavLink>
                  </li>
                  <li className="nav-item h5 px-2">
                    <NavLink className='lien' to="/programme">Programme</NavLink>
                  </li>
                  <li className="nav-item h5 px-2">
                    <NavLink className='lien' to="/controle">Contrôle</NavLink>
                  </li>
                  <li className="nav-item h5 px-2">
                    <NavLink className='lien' to="/epreuve">Épreuves</NavLink>
                  </li>
                  <li className="nav-item px-2 py-4 ms-4">
                    <Button text="Connexion" className="connexion h5">Connexion</Button>
                  </li>
                </ul>  
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;