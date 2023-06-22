import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Template from "./templte/Template";
import "./templte/Template.css";
function App() {
  const router = useRoutes(routes);

  return (
    <div className="App">
      {router}

      {/* <Template/> */}
    </div>
  );
}

export default App;
