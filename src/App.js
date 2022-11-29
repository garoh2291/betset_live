import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SportTypeContextProvider } from "./context/provider";
import { Header } from "./Layout/Header";
import { NavHeader } from "./Layout/NavHeader";
import { RoutesComponents } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <SportTypeContextProvider>
        <div className="App">
          <Header />
          <NavHeader />
          <RoutesComponents />
        </div>
      </SportTypeContextProvider>
    </BrowserRouter>
  );
}

export default App;
