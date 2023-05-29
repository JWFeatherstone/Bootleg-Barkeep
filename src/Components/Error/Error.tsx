import React from 'react';
import './Error.css';

interface ErrorProps {
  message: string; 
}

export const Error: React.FC<ErrorProps> = ({message}) => {
  return (
    <section className = "error-page">
      <div className="error-frame">
        <img className = "error-image" src="" alt="error-graphic" />
        {message === "Server error." ? (
          <h2 className = "error-message">A server error occured while we were trying to fetch your cocktails. Please try again.</h2>
        ) : (<h2 className = "error-message">An unknown error has occured. Panic.</h2>)}
      </div>
    </section>
  )
}