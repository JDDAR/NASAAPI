import { useEffect, useState } from "react";
import Content from "./components/Content";
import Main from "./components/Main";
import { TiAdjustBrightness } from "react-icons/ti";

function App() {
  // Datos iniciales de la app
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para obtener datos de la API
  const fetchAPIData = async () => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

    // Almacenando en cache
    const today = new Date().toDateString();
    const localKey = `NASA-${today}`;

    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      setData(apiData);
      console.log("Fetched from cache today");
      return;
    }

    // Limpiar cache del día anterior
    localStorage.clear();

    try {
      setLoading(true);
      const res = await fetch(url);
      const apiData = await res.json();
      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
      console.log("Fetched from API today");
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  // Ejecutar la función fetchAPIData cuando el componente se monta
  useEffect(() => {
    fetchAPIData();
  }, []);

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
