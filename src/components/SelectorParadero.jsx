import "./SelectorParadero.css";
import { useState } from "react";

function SelectorParadero({ paraderos, onBuscar }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [error, setError] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();

    if (!origen || !destino) {
      setError("Selecciona origen y destino.");
      return;
    }
    if (origen === destino) {
      setError("Origen y destino no pueden ser el mismo.");
      return;
    }

    setError("");
    onBuscar(origen, destino);
  }

  return (
    <form className="selector-paradero" onSubmit={manejarSubmit}>
      <div className="campo">
        <label htmlFor="origen">Desde</label>
        <select
          id="origen"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
        >
          <option value="">Selecciona un paradero</option>
          {paraderos.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="campo">
        <label htmlFor="destino">Hasta</label>
        <select
          id="destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        >
          <option value="">Selecciona un paradero</option>
          {paraderos.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Buscar ruta</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default SelectorParadero;