import "./ListaOpciones.css";
import TarjetaOpcion from "./TarjetaOpcion";

function ListaOpciones({ opciones }) {
  return (
    <div className="lista-opciones">
      {opciones.map((opcion, i) => (
        <TarjetaOpcion
          key={i}
          opcion={opcion}
          esMejor={i === 0 && opciones.length > 1}
        />
      ))}
    </div>
  );
}

export default ListaOpciones;