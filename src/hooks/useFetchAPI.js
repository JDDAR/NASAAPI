// src/hooks/useFetchAPI.js
import { useState, useCallback, useEffect } from "react";

const useFetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para obtener una fecha aleatoria
  const getRandomDate = () => {
    const start = new Date(1995, 5, 16); // Primera imagen de APOD
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    const yyyy = randomDate.getFullYear();
    const mm = String(randomDate.getMonth() + 1).padStart(2, "0"); // Los meses son base 0 en js
    const dd = String(randomDate.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // Función para obtener datos de la API
  const fetchAPIData = useCallback(async () => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const randomDate = getRandomDate();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${randomDate}`;

    // Almacenando en cache
    const localKey = `NASA-${randomDate}`;

    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      setData(apiData);
      console.log("Fetched from cache today", randomDate);
      return;
    }

    // Limpiar cache
    localStorage.clear();

    try {
      setLoading(true);
      const res = await fetch(url);
      const apiData = await res.json();
      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
      console.log("Fetched from API today", randomDate);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }, []);

  // Ejecutar la función fetchAPIData cuando el componente se monta
  useEffect(() => {
    fetchAPIData();
  }, [fetchAPIData]);

  return { data, loading, fetchAPIData };
};

export default useFetchAPI;
