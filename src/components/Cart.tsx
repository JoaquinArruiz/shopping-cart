import { useAppSelector } from "../app/hooks"
import { selectCart } from "../features/cart/cartSlice"
import { inventory } from "../inventory"
import { Link } from "react-router-dom"

function Cart() {
  const cart = useAppSelector(selectCart)

  const countAmount = (array: any, item: any) => {
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
      cart:
      <div>
        {inventory
          .filter((item) => countAmount(cart, item) > 0)
          .map((item, index) => (
            <div key={index}>
              <span>
                {item.name}: {countAmount(cart, item)}
              </span>
            </div>
          ))}
      </div>
      <Link to="/browse">browse</Link>
      <Link to="/">homepage</Link>
    </div>
  )
}

export default Cart
