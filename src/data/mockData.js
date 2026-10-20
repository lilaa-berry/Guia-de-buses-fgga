export const paraderos = [
  "Terminal",
  "Centro",
  "Hospital",
  "Alcaldía",
  "Universidad",
  "La pampa",
  "Plaza de Mercado",
];

const resultadosMock = {
  "terminal|universidad": [
    {
      recorrido: ["Terminal", "Centro", "Hospital", "Universidad"],
      buses: 1,
      transbordos: 0,
      rutas_usadas: ["Ruta 1"],
      costo: 2600,
    },
    {
      recorrido: ["Terminal", "Alcaldía", "La pampa", "Universidad"],
      buses: 1,
      transbordos: 0,
      rutas_usadas: ["Ruta 2"],
      costo: 2600,
    },
  ],
  "terminal|plaza de mercado": [
    {
      recorrido: ["Terminal", "Alcaldía", "Plaza de Mercado"],
      buses: 2,
      transbordos: 1,
      rutas_usadas: ["Ruta 2", "Ruta 3"],
      costo: 5200,
    },
  ],
  "hospital|plaza de mercado": [
    {
      recorrido: ["Hospital", "Centro", "Alcaldía", "Plaza de Mercado"],
      buses: 2,
      transbordos: 1,
      rutas_usadas: ["Ruta 1", "Ruta 3"],
      costo: 5200,
    },
  ],
};

export function buscarMock(origen, destino) {
  if (origen === destino) {
    return [
      { recorrido: [origen], buses: 0, transbordos: 0, rutas_usadas: [], costo: 0 },
    ];
  }

  const clave = `${origen.toLowerCase()}|${destino.toLowerCase()}`;
  return resultadosMock[clave] || [];
}