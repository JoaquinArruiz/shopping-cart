import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement, clear } from "../features/cart/cartSlice";
import { selectCart } from "../features/cart/cartSlice";
import { inventory } from "../inventory";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { toast } from "sonner";

const countAmount = (array: any, item: any) => {
  let count = 0;
  array.forEach((element: any) => {
    if (element.name === item.name) {
      count++;
    }
  });
  return count;
};

function Cart() {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <div className="flex h-screen w-full bg-rama-darker text-neutral-50">
        <div className="m-6 flex w-full flex-row border-2 border-black bg-rama-dark p-5">
          <div className="flex w-full flex-col">
            {inventory
              .filter((item) => countAmount(cart.content, item) > 0)
              .map((item, index) => (
                <div
                  key={index}
                  className="mt-2 flex flex-row justify-around rounded-lg bg-rama-darker p-3 shadow-sm shadow-black"
                >
                  <div>{item.name}</div>
                  <div>cantidad: {countAmount(cart.content, item)}</div>
                  <div>
                    subtotal: {item.price * countAmount(cart.content, item)}
                  </div>
                  <div>
                    <button
                      className="h-min"
                      onClick={() => dispatch(increment(item))}
                    >
                      +
                    </button>
                    <button
                      className="h-min"
                      onClick={() => dispatch(decrement(item))}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="ml-2 mt-2 border-2 border-black p-3">
            contador
            <div>total: {cart.total}</div>
            <button
              onClick={() => {
                cart.content.length === 0
                  ? toast("Cart is empty")
                  : toast("Cart cleared");
                dispatch(clear());
              }}
            >
              borrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Cart, countAmount };
