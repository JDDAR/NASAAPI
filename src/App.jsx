import Content from "./components/Content";
import Main from "./components/Main";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  return (
    <>
      <Main />
      <Content />
    </>
  );
}

export default App;
