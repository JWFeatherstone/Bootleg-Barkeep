import React from 'react';
import './Header.css';
import { Route, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <NavLink to="/" className="home-nav logo">Bootleg Barkeep</NavLink>
      <nav>
        <NavLink to="/drinks/whiskey" className="ingredient-nav">Whiskey</NavLink>
        <NavLink to="/drinks/brandy" className="ingredient-nav">Brandy</NavLink>
        <NavLink to="/drinks/vodka" className="ingredient-nav">Vodka</NavLink>
        <NavLink to="/drinks/gin" className="ingredient-nav">Gin</NavLink>
        <NavLink to="/drinks/rum" className="ingredient-nav">Rum</NavLink>
        <NavLink to="/drinks/tequila" className="ingredient-nav">Tequila</NavLink>
      </nav>
    </header>
  );
};

export default Header;