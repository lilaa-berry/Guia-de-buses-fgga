// src/services/api.js
import { paraderos as paraderosMock, buscarMock } from "../data/mockData";

// Cuando el backend ya tenga servidor HTTP corriendo, cambia esto a false
// y ajusta la URL al puerto real.
const USAR_MOCK = true;
const API_BASE_URL = "http://localhost:5000";

export async function obtenerParaderos() {
  if (USAR_MOCK) {
    await simularRed();
    return paraderosMock;
  }

  const respuesta = await fetch(`${API_BASE_URL}/paraderos`);
  if (!respuesta.ok) throw new Error("No se pudo cargar la lista de paraderos.");
  return respuesta.json();
}

export async function buscarRecorridos(origen, destino) {
  if (USAR_MOCK) {
    await simularRed();
    return buscarMock(origen, destino);
  }

  const params = new URLSearchParams({ origen, destino });
  const respuesta = await fetch(`${API_BASE_URL}/consultar?${params}`);
  if (!respuesta.ok) throw new Error("No se pudo consultar la ruta.");
  return respuesta.json();
}

function simularRed() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}