import { useEffect, useState, useCallback } from "react";
import Content from "./components/Content";
import Main from "./components/Main";
import { TiAdjustBrightness } from "react-icons/ti";

function App() {
  // Datos iniciales de la app
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  //Funcion para obtener una fecha aleatoria
  const getRamdonDate = () => {
    const start = new Date(1995, 5, 16); // Primera imangen de apod
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
    const randomDate = getRamdonDate();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${randomDate}`;

    // Almacenando en cache
    const localKey = `NASA-${randomDate}`;

    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      setData(apiData);
      console.log("Fetched from cache today", randomDate);
      return;
    }

    //Limpiando cache
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

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <TiAdjustBrightness className="iconLoading" />
        </div>
      ) : (
        <>
          {data ? <Main data={data} /> : <p>No data available</p>}
          {data && <Content data={data} />}
          <button onClick={fetchAPIData} className="buttonNew">
            Load New Image
          </button>
        </>
      )}
    </>
  );
}

export default App;
