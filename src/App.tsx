import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import Marquee from "react-fast-marquee";


function App() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="flex flex-col h-full w-full bg-rama-darker text-neutral-50">
        adsasdasd
        <Marquee className="bg-black max-h-fit p-6 text-8xl">Ropa fachera al mejor precio</Marquee>
      </div>

    </div>
  );
}

export default App;
