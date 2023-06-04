import React from 'react';
import './ErrorPage.css';
import errorImage from '../../img/error-icon.svg'
import { NavLink } from 'react-router-dom';

export const ErrorPage: React.FC = () => {

  return (
    <section className="error-page">
      <div className="error-frame">
        <img className = "error-image" src={errorImage} alt="error-graphic" />
        <h2 className = "error-message">A server error occured while we were trying to fetch your cocktails. Please try again.</h2>
        <NavLink to="/" className="error-link"></NavLink>
      </div>
    </section>
  );
};
