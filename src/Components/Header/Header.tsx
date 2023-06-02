import React from 'react';
import './Header.css';
import { Route, NavLink } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header>
      <div className="icon-border">
        <NavLink to="/" className="home-nav"></NavLink>
      </div>
      <nav>
        <NavLink to="/drinks/scotch" className="ingredient-nav first-nav" style={{textDecoration: 'inherit'}}>SCOTCH</NavLink>
        <NavLink to="/drinks/brandy" className="ingredient-nav" style={{textDecoration: 'inherit'}}>BRANDY</NavLink>
        <NavLink to="/drinks/vodka" className="ingredient-nav" style={{textDecoration: 'inherit'}}>VODKA</NavLink>
        <NavLink to="/drinks/gin" className="ingredient-nav" style={{textDecoration: 'inherit'}}>GIN</NavLink>
        <NavLink to="/drinks/rum" className="ingredient-nav" style={{textDecoration: 'inherit'}}>RUM</NavLink>
        <NavLink to="/drinks/tequila" className="ingredient-nav" style={{textDecoration: 'inherit'}}>TEQUILA</NavLink>
      </nav>
    </header>
  );
};

export default Header;