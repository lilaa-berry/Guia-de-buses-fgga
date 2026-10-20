import "./TarjetaOpcion.css";
function formatCOP(valor) {
  if (valor === 0) return "Gratis";
  return `$${valor.toLocaleString("es-CO")}`;
}

function TarjetaOpcion({ opcion, esMejor }) {
  const { recorrido, buses, transbordos, rutas_usadas, costo } = opcion;

  return (
    <article className={`tarjeta-opcion${esMejor ? " tarjeta-opcion--mejor" : ""}`}>
      {esMejor && <span className="etiqueta-mejor">Opción recomendada</span>}

      <div className="tarjeta-opcion__cabecera">
        <span className="tarjeta-opcion__costo">{formatCOP(costo)}</span>
        <span className="tarjeta-opcion__stats">
          {buses} {buses === 1 ? "bus" : "buses"} · {transbordos}{" "}
          {transbordos === 1 ? "transbordo" : "transbordos"}
        </span>
      </div>

      <p className="tarjeta-opcion__recorrido">
        {recorrido.map((paradero, i) => (
          <span key={paradero + i}>
            {paradero}
            {i < recorrido.length - 1 && <span className="flecha"> → </span>}
          </span>
        ))}
      </p>

      {rutas_usadas.length > 0 && (
        <div className="tarjeta-opcion__rutas">
          {rutas_usadas.map((ruta, i) => (
            <span key={ruta + i} className="chip-ruta">
              {ruta}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default TarjetaOpcion;