import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registrer.css';

const Registrer = () => {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("nombreUsuario", nombre);
    const historial = JSON.parse(localStorage.getItem("historialTarot") || "[]");
    const usuarioExiste = historial.some(l => l.nombre.toLowerCase() === nombre.toLowerCase());

    if (usuarioExiste) {
      navigate('/historial');
    } else {
      navigate('/card-selection');
    }
  };

  return (
    <div className="registration-screen">
      <div className="registration-box">
        <h2 className="registration-title">Registration</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Maria or Pedro..." 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
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