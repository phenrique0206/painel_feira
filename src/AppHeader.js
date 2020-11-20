import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@600&display=swap" rel="stylesheet"></link>

    <div className="center-column">
    <NavLink to="/"><img className= "img-header" src={require('./images/icon.png') }/></NavLink>
      <h1 className = "text-header"> Feira Demo</h1>
    </div>
    <nav>
      <ol className="center-column-2">
        <li href="#" >
          <NavLink className="titles" to="/">Buscar Lojas</NavLink>
        </li>
        <li href="#">
          <NavLink className="titles" to="/random">Estou com Sorte!</NavLink>
        </li>
        <li href="#">
          <NavLink className="titles" to="/about">Sobre</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
