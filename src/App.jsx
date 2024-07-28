//Iconos
import { TiAdjustBrightness } from "react-icons/ti";
//components
import Content from "./components/Content";
import Main from "./components/Main";
//hooks
import useFetchAPI from "./hooks/useFetchAPI";

function App() {
  const { data, loading, fetchAPIData } = useFetchAPI();
  return (
    <>
      {loading ? (
        <div className="loadingState">
          <TiAdjustBrightness className="iconLoading" />
        </div>
      ) : (
        <>
          {data ? <Main data={data} /> : <p>No data available</p>}
          {data && <Content data={data} fetchAPIData={fetchAPIData} />}
        </>
      )}
    </>
  );
}

export default App;
