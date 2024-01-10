import React from "react";
import { Link } from "react-router-dom";
import { selectCart } from "../features/cart/cartSlice";
import { useAppSelector } from "../app/hooks";

export const Header = () => {
  const cart = useAppSelector(selectCart);

  return (
    <>
      <div className="sticky top-0 flex w-full flex-row justify-between bg-slate-50 p-3 shadow-md shadow-black">
        <div>
          <img alt="Logo Ipsum"></img>
        </div>
        <div>SearchBar</div>
        <div className="flex space-x-3">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/cart">
            Cart {cart.totalQty === 0 ? "" : `(${cart.totalQty})`}
          </Link>
        </div>
      </div>
    </>
  );
};
