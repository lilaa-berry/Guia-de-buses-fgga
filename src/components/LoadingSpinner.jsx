// src/components/LoadingSpinner.jsx
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-label="Cargando">
      <span className="loading-spinner__circle"></span>
      <p>Buscando la mejor ruta...</p>
    </div>
  );
}

export default LoadingSpinner;