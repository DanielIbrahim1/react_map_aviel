
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
      <Link to="/students"> students</Link> 
      <Link to="/dogs"> dogs</Link> 
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
