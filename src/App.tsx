import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

let imgArray = [];

function App() {
  const [imageDisplay, setImageDisplay] = useState(imgArray);

  const fetchItem = (): void => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=1&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        let imageDisplayAux: Array<String> = [];
        console.log(data);
        data.forEach((cartItem: Object) => {
          let img = cartItem.images[0];
          imageDisplayAux.push(img);
        });
        setImageDisplay(imageDisplayAux);
      });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className="h-screen w-full">
      <Header />
      <div className="flex h-full w-full flex-col bg-rama-darker text-neutral-50">
        <div className="w-full p-6">
          <h1 className="text-8xl">Welcome to YourCart</h1>
          <h2 className=" pl-3 text-5xl">Shop smart, shop with ease!</h2>
        </div>
        <Marquee className="max-h-fit bg-black p-3 text-4xl">
          Discover a world of endless possibilities in our online store.
          YourCart - Where your shopping dreams come true.
        </Marquee>
        <div className="p-12">
          <p className="text-2xl">
            Start Browsing Section: Explore our wide range of products and find
            the perfect items to enhance your lifestyle. From the latest tech
            gadgets to stylish fashion pieces, YourCart has it all. Begin your
            journey now!
          </p>
          <Link to="/browse">
            <button className="m-5 rounded-lg border-2 border-neutral-950 bg-neutral-50 p-3 text-neutral-950 transition-all ease-out hover:translate-x-2 hover:bg-slate-300 hover:shadow-md">
              Browse Now!
            </button>
          </Link>
          <hr></hr>
        </div>
        <Marquee className="max-h-fit bg-black p-3 text-4xl" autoFill>
          {imageDisplay.map((img, index) => (
            <img
              key={index}
              className="h-72 pl-7 transition-all ease-in hover:scale-105"
              src={img}
              alt={"image " + index}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default App;
