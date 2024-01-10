import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full bg-red-600">
        biem venidos
        <Link to="cart">cart</Link>
        <Link to="browse">browse</Link>
      </div>
    </>
  );
}

export default App;
