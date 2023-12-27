import { useAppDispatch } from "./../app/hooks";
import { increment, decrement, selectCart } from "../features/cart/cartSlice";
import { inventory } from "./../inventory";
import { Link } from "react-router-dom";

function Browse() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-screen w-screen bg-red-700">
      <div className="m-3 flex flex-col border-2 border-black px-8">
        <div>
          <Link to="/cart">cart</Link>
        </div>
        <div>
          <Link to="/">homepage</Link>
        </div>
      </div>
      <div className="m-3 flex w-full flex-row border-2 border-black">
        {inventory.map((item, index) => (
          <div
            key={index}
            className="m-3 flex h-28 w-28 items-center justify-center border-2 border-black"
          >
            <span className="h-min">{item.name}</span>
            <button className="h-min" onClick={() => dispatch(increment(item))}>
              +
            </button>
            <button className="h-min" onClick={() => dispatch(decrement(item))}>
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
