import { useAppDispatch, useAppSelector } from "./../app/hooks";
import { increment, decrement } from "../features/cart/cartSlice";
import { inventory } from "./../inventory";
import { getQty } from "./Cart";
import { Link } from "react-router-dom";
import { selectCart } from "../features/cart/cartSlice";
import { Header } from "./Header";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { ItemInterface } from "./../inventory";

let initialInventory: Array<ItemInterface> = [];

function Browse() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [inventory, setInventory] = useState(initialInventory);

  const fetchItem = (): void => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=1&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let newInventory: Array<ItemInterface> = [];
        data.forEach((item: ItemInterface) => {
          let newItem: ItemInterface = {
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            images: item.images,
          };
          newInventory.push(newItem);
        });
        setInventory(newInventory);
      });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex h-full w-full bg-rama-darker">
        <div className="m-6 flex w-full flex-row flex-wrap space-y-0 rounded-lg p-5 text-rama-light">
          {inventory.map((item, index) => (
            <div
              key={index}
              className="max-w-1/4 ml-3 h-1/6 min-w-96 flex-1 flex-col justify-between border-r-2 border-rama-dark border-opacity-50"
            >
              <Link to={`/item/${item.id}`}>
                <img
                  className="h-3/4"
                  src={item.images[0]}
                  alt={item.title + " image"}
                />
              </Link>

              <div className="flex h-1/4 flex-row items-center justify-between">
                <p className="h-min w-3/4 text-left text-lg">{item.title}</p>
                <p className="h-min w-1/4 text-right text-lg">$ {item.price}</p>
                <button
                  className="m-3 size-6 h-auto w-10  rounded-full bg-rama-light text-black"
                  onClick={() => {
                    dispatch(increment(item));
                    toast(`Added ${item.title} to cart`);
                  }}
                >
                  +
                </button>
                {getQty(cart.content, item) > 0 ? (
                  <button
                    className="m-3 size-6 h-auto w-10  rounded-full bg-rama-light text-black"
                    onClick={() => {
                      toast(`Removed ${item.title} from cart`);
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
