import { useAppDispatch, useAppSelector } from "./../app/hooks";
import { increment, decrement } from "../features/cart/cartSlice";
import { useParams } from "react-router-dom";
import { getQty } from "./Cart";
import { selectCart } from "../features/cart/cartSlice";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { ItemInterface } from "../inventory";
import { toast } from "sonner";

let emptyItem: ItemInterface = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: { id: 0, name: "", image: "" },
  images: [""],
};

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(emptyItem);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const fetchItem = (): void => {
    fetch(`https://api.escuelajs.co/api/v1/products/4`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div className="h-screen bg-rama-darker">
      <Header />
      <div className="flex justify-center">
        <div className="h-content flex w-2/5 flex-col items-center justify-center bg-rama-dark p-5">
          <div className="text-4xl text-neutral-50"> {item.title} </div>
          <div className="text-neutral-50"> {item.description} </div>
          <img src={item.images[0]} className="h-3/4 w-3/4" alt="product" />
          <div className="flex flex-row">
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
      </div>
    </div>
  );
}

export { ItemPage };
