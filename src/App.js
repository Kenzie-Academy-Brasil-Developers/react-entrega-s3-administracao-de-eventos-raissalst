import NavBar from "./components/NavBar";
import RoutesPath from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <GlobalStyle />
      <RoutesPath />
    </>
  );
}

export default App;
