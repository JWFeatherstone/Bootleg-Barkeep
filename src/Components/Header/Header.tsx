import React from 'react';
import './Header.css';
import { Route, NavLink } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header>
      <div className="icon-border">
        <div className="icon-backer"></div>
        <NavLink to="/" className="home-nav"></NavLink>
      </div>
      <nav>
        <NavLink to="/drinks/whiskey" className="ingredient-nav first-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>WHISKEY</NavLink>
        <NavLink to="/drinks/brandy" className="ingredient-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>BRANDY</NavLink>
        <NavLink to="/drinks/vodka" className="ingredient-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>VODKA</NavLink>
        <NavLink to="/drinks/gin" className="ingredient-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>GIN</NavLink>
        <NavLink to="/drinks/rum" className="ingredient-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>RUM</NavLink>
        <NavLink to="/drinks/tequila" className="ingredient-nav" style={{ color: 'inherit', textDecoration: 'inherit'}}>TEQUILA</NavLink>
      </nav>
    </header>
  );
};

export default Header;