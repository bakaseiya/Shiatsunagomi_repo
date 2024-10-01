// components/LoadingScreen.js
import React from 'react';
import '../pages/css/LoadingScreen.css'; // Foglio di stile opzionale per la personalizzazione

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div> {/* Puoi personalizzarlo */}
      <h1>Caricamento...</h1>
    </div>
  );
};

export default LoadingScreen;
