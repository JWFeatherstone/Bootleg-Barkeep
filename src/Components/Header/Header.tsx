import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <img src="" alt="Bootleg Barkeep Logo" className="logo"/>
      <h1>Bootleg Barkeep</h1>
      <nav>
        <NavLink to="/" className="home-nav">Home</NavLink>
        <NavLink to="/ingredient/whiskey" className="ingredient-nav">Whiskey</NavLink>
        <NavLink to="/ingredient/brandy" className="ingredient-nav">Brandy</NavLink>
        <NavLink to="/ingredient/vodka" className="ingredient-nav">Vodka</NavLink>
        <NavLink to="/ingredient/gin" className="ingredient-nav">Gin</NavLink>
        <NavLink to="/ingredient/rum" className="ingredient-nav">Rum</NavLink>
        <NavLink to="/ingredient/tequila" className="ingredient-nav">Tequila</NavLink>
      </nav>
    </header>
  );
};

export default Header;