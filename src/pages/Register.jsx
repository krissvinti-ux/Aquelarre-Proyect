import React from 'react';
import './Registrer.css';

const Registrer = () => {
  return (
    <div className="registration-screen">
      <div className="registration-box">
        <h2 className="registration-title">Registration</h2>
        
        <form className="registration-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Maria Campos" />
          </div>

          <div className="input-group">
            <label htmlFor="dob">Date of Birthday</label>
            <input type="text" id="dob" placeholder="08/08/1986" />
          </div>

          <button type="submit" className="read-fortune-btn">
            Read my fortune!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrer;