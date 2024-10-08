import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessComponent.css'; // Importa el archivo CSS
import botellaCompraExitosa from '../assets/logos/botellaCompraExitosa.png';
import bienvenidoAArticGinClub from '../assets/logos/bienvenidoAArticGinClub.png';

const SuccessComponent = () => {
  const [showPopup, setShowPopup] = useState(true); // Estado para controlar el pop-up
  const navigate = useNavigate();

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => {
      navigate('/');
    }, 10000);
  };

  return (
    <div className="success-container">
      {showPopup && (
        <div className="ups-popup">
          <div className="ups-popup-content">
            <p>
              Gracias por tu compra. En breve nos comunicaremos por mail con los
              detalles de tu compra. Salute! :)
            </p>
            <button onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
      <img
        src={botellaCompraExitosa}
        alt="Botella Compra Exitosa"
        className="success-image-middle"
      />
      <img
        src={bienvenidoAArticGinClub}
        alt="Bienvenido a Artic Gin Club"
        className="success-image-bottom-right"
      />
    </div>
  );
};

export default SuccessComponent;
