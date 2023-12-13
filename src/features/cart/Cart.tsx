import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { increment, selectCart } from "./cartSlice"
import { inventory } from "../../inventory"

export function Cart() {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        {inventory.map((item, index) => (
          <div key={index}>
            <button onClick={() => dispatch(increment(item))}>+</button>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      cart:
      <div>
        {cart.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}
