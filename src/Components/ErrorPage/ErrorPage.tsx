import React from "react";
import "./ErrorPage.css";
import errorImage from "../../Assets/error-icon.svg";
import { NavLink } from "react-router-dom";

interface ErrorProps {
  message: string;
}

export const ErrorPage: React.FC<ErrorProps> = ({ message }) => {
  return (
    <section className="error-page">
      <div className="error-frame">
        <img className="error-image" src={errorImage} alt="error-graphic" />
        {message === "Server error." ? (
          <h2 className="error-message">
            A server error occured while we were trying to fetch your cocktails.
            Please try again.
          </h2>
        ) : (
          <h2 className="error-message">
            An unknown error has occured. Panic.
          </h2>
        )}
        <NavLink to="/" className="error-link"></NavLink>
      </div>
    </section>
  );
};
