import { useAppDispatch, useAppSelector } from "./../app/hooks";
import { increment, decrement } from "../features/cart/cartSlice";
import { inventory } from "./../inventory";
import { countAmount } from "./Cart";
import { Link } from "react-router-dom";
import { selectCart } from "../features/cart/cartSlice";

function Browse() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart)

  return (
    <div className="flex h-screen w-screen bg-rama-darker">
      <div className="m-6 ml-[-15px] w-64 flex flex-col bg-rama-dark px-8 rounded-lg text-xl text-rama-light ">
        <div className="flex text-2xl h-32 items-center">
          <p className="text-center">LOGO IPSUM</p>
        </div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="">Browse</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
        
      </div>
      <div className="m-6 space-x-5 w-full flex flex-row flex-wrap p-5 rounded-lg text-rama-light">
        {inventory.map((item, index) => (
          <div
            key={index}
            className="ml-3 justify-between flex-1 flex-col h-1/4 min-w-96 flex-shrink-1 flex-grow-1 border-r-2 border-rama-dark border-opacity-50"
          >
            <img className="h-3/4" src={item.image} alt={item.name + " image"} />
            <div className="h-1/4 flex flex-row justify-between items-center">
              <p className="text-lg text-left h-min w-3/4">{item.name}</p>
              <p className="text-lg text-right h-min w-1/4">$ {item.price}</p>
              <button className="m-3 w-10 h-auto size-6  bg-rama-light rounded-full text-black" onClick={() => dispatch(increment(item))}>
                +
              </button>
              {(countAmount(cart.content, item) > 0 ? <button className="m-3 w-10 h-auto size-6  bg-rama-light rounded-full text-black" onClick={() => dispatch(decrement(item))}> - </button> : <></>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Browse };
