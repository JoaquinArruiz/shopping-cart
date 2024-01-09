import { useAppDispatch, useAppSelector } from "./../app/hooks";
import { increment, decrement } from "../features/cart/cartSlice";
import { inventory } from "./../inventory";
import { countAmount } from "./Cart";
import { Link } from "react-router-dom";
import { selectCart } from "../features/cart/cartSlice";
import { Header } from "./header";
import { Toaster, toast } from "sonner";

function Browse() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  return (
    <div>
      <Header />
      <div className="flex h-screen w-full bg-rama-darker">
        <div className="m-6 ml-[-15px] flex w-64 flex-col rounded-lg bg-rama-dark px-8 text-xl text-rama-light ">
          <div className="flex h-32 items-center text-2xl">
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
        <div className="m-6 flex w-full flex-row flex-wrap space-x-5 rounded-lg p-5 text-rama-light">
          {inventory.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-1 flex-grow-1 ml-3 h-1/4 min-w-96 flex-1 flex-col justify-between border-r-2 border-rama-dark border-opacity-50"
            >
              <img
                className="h-3/4"
                src={item.image}
                alt={item.name + " image"}
              />
              <div className="flex h-1/4 flex-row items-center justify-between">
                <p className="h-min w-3/4 text-left text-lg">{item.name}</p>
                <p className="h-min w-1/4 text-right text-lg">$ {item.price}</p>
                <button
                  className="m-3 size-6 h-auto w-10  rounded-full bg-rama-light text-black"
                  onClick={() => {
                    dispatch(increment(item));
                    toast(`Added ${item.name} to cart`);
                  }}
                >
                  +
                </button>
                {countAmount(cart.content, item) > 0 ? (
                  <button
                    className="m-3 size-6 h-auto w-10  rounded-full bg-rama-light text-black"
                    onClick={() => {
                      toast(`Removed ${item.name} from cart`);
                      dispatch(decrement(item));
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Browse };
