import { useAppDispatch } from "./../app/hooks"
import { increment, decrement, selectCart } from "../features/cart/cartSlice"
import { inventory } from "./../inventory"
import { Link } from "react-router-dom"

function Browse() {
  const dispatch = useAppDispatch()

  return (
    <div>
      {inventory.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(increment(item))}>+</button>
          <button onClick={() => dispatch(decrement(item))}>-</button>
        </div>
      ))}
      

      <Link to="/cart">cart</Link>
    </div>
  )
}

export default Browse
