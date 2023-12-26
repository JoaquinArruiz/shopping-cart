import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { increment, decrement, selectCart } from "./cartSlice"
import { inventory } from "../../inventory"

export function Cart() {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  const countAmount = (array: any, item:any) => {
    let count = 0
    array.forEach((element: any) => {
      if (element.name === item.name) {
        count++
      }
    })
    return count
  }

  return (
    <div>
      <div>
        {inventory.map((item, index) => (
          <div key={index}>
            <button onClick={() => dispatch(increment(item))}>+</button>
            <button onClick={() => dispatch(decrement(item))}>-</button>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      cart:
      <div>
        {inventory.map((item, index) => {
          let amount = countAmount(cart, item);
          if (amount > 0) {
            return(
              <div key={index}>
                <span>{item.name}: </span>
                <span>{amount}</span>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
