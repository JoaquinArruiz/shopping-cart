import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement, clear } from "../features/cart/cartSlice";
import { selectCart } from "../features/cart/cartSlice";
import { Header } from "./Header";
import { toast } from "sonner";
import { CartItemInterface } from "../features/cart/cartSlice";

const getQty = (array: any, item: any) => {
  let qty = 0;
  array.forEach((cartItem: CartItemInterface) => {
    if (cartItem.item.title === item.title) {
      qty = cartItem.qty;
    }
  });

  return qty;
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
            {cart.content.map((cartItem: CartItemInterface, index: number) =>
              cartItem.qty > 0 ? (
                <div
                  key={index}
                  className="mt-2 flex flex-row justify-around rounded-lg bg-rama-darker p-3 shadow-sm shadow-black"
                >
                  <div>{cartItem.item.title}</div>
                  <div>cantidad: {cartItem.qty}</div>
                  <div>subtotal: {cartItem.item.price * cartItem.qty}</div>
                  <div>
                    <button
                      className="h-min"
                      onClick={() => dispatch(increment(cartItem.item))}
                    >
                      +
                    </button>
                    <button
                      className="h-min"
                      onClick={() => dispatch(decrement(cartItem.item))}
                    >
                      -
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              ),
            )}
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

export { Cart, getQty };
