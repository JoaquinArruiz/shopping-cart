import { useAppSelector } from "../app/hooks";
import { selectCart } from "../features/cart/cartSlice";
import { inventory } from "../inventory";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useAppSelector(selectCart);

  const countAmount = (array: any, item: any) => {
    let count = 0;
    array.forEach((element: any) => {
      if (element.name === item.name) {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="flex h-screen w-screen bg-red-600">
      <div className="m-6 flex flex-col border-2 border-black bg-red-700 px-8">
        <div>
          <Link to="/browse">Browse</Link>
        </div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
      </div>

      <div className="m-6 flex w-full flex-row border-2 border-black bg-red-700 p-5">
        <div className="flex w-full flex-col">
          {inventory
            .filter((item) => countAmount(cart, item) > 0)
            .map((item, index) => (
              <div key={index} className="mt-2 border-2 border-black p-3">
                <div>{item.name}</div>
                <div>{countAmount(cart, item)}</div>
                <div>subtotal: {item.price * countAmount(cart, item)}</div>
              </div>
            ))}
        </div>
        <div className="ml-2 mt-2 border-2 border-black p-3">
          contador
          <div>total</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
