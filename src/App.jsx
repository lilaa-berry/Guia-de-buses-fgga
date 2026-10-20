// src/App.jsx
import { useState, useEffect } from "react";
import SelectorParadero from "./components/SelectorParadero";
import ListaOpciones from "./components/ListaOpciones";
import LoadingSpinner from "./components/LoadingSpinner";
import { obtenerParaderos, buscarRecorridos } from "./services/api";
import "./styles/variables.css";
import "./styles/global.css";

function App() {
  const [paraderos, setParaderos] = useState([]);
  const [opciones, setOpciones] = useState(null);
  const [busquedaHecha, setBusquedaHecha] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerParaderos()
      .then(setParaderos)
      .catch(() => setError("No se pudo cargar la lista de paraderos."));
  }, []);

  async function manejarBuscar(origen, destino) {
    setCargando(true);
    setError("");
    setBusquedaHecha(false);

    try {
      const resultado = await buscarRecorridos(origen, destino);
      setOpciones(resultado);
      setBusquedaHecha(true);
    } catch {
      setError("No se pudo consultar la ruta. Intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rutas de buses — Fusagasugá</h1>
        <p>Encuentra cómo llegar de un paradero a otro</p>
      </header>

      <SelectorParadero paraderos={paraderos} onBuscar={manejarBuscar} />

      {cargando && <LoadingSpinner />}

      {error && <p className="mensaje-error">{error}</p>}

      {!cargando && busquedaHecha && opciones.length === 0 && (
        <p className="sin-resultados">
          No se encontraron recorridos entre esos paraderos.
        </p>
      )}

      {!cargando && opciones && opciones.length > 0 && (
        <ListaOpciones opciones={opciones} />
      )}

      <footer className="app-footer">
        Proyecto integrador · Programación II &amp; Estructuras de Información
      </footer>
    </div>
  );
}

export default App;