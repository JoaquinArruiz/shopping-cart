import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      biem venidos
      <Link to="cart">cart</Link>
      <Link to="browse">browse</Link>
    </div>
  );
}

export default App;
