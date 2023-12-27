import { useAppDispatch } from "./../app/hooks";
import { increment, decrement } from "../features/cart/cartSlice";
import { inventory } from "./../inventory";
import { Link } from "react-router-dom";

function Browse() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-screen w-screen bg-rama-darker">
      <div className="m-6 ml-[-15px] w-64 flex flex-col border-2 border-rama-light bg-rama-dark px-8 rounded-lg text-xl">
        <div className="flex text-2xl h-32 items-center">
          <p className="text-center">LOGO IPSUM</p>
        </div>
        <div>
          <Link to="">Browse</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
      </div>
      <div className="m-6 space-x-5 flex w-full flex-row  p-5 rounded-lg">
        {inventory.map((item, index) => (
          <div
            key={index}
            className="ml-3 justify-between flex flex-col h-1/4 w-40 border-r-2 border-rama-light"
          >
            <img className="h-3/4 w-20" src={item.image} alt={item.name + " image"} />
            <div className="h-1/4 flex flex-row justify-between items-center">
              <p className="text-lg text-left h-min w-3/4">{item.name}</p>
              <div className="w-1/4">

              </div>
              <button className="m-3 w-10 h-auto size-6  bg-rama-light rounded-full " onClick={() => dispatch(increment(item))}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Browse };
