import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'
import { Link } from 'react-router-dom'
import Body from './Body'

const Cart = () => {
  // type 1 and type 2 both are same but in performance base type 2 is not good because
  // we need only cart item so why we subscribe whole store.
  // only subscribe small porstion of the store

  // type 1
  // const store = useSelector((store)=> store)
  // const cartItem = store.cart.items

  // type 2
  const cartItem = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  // subscribe cart
  console.log('carItem', cartItem)
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className=" p-3 my-2 bg-black text-white rounded"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="w-6/12  bg-gray-50 shadow-lg  mx-auto mb-2  px-4">
        {cartItem.length === 0 && (
          <>
            <h1>Cart is Empty</h1>
            <Link
              to="/"
              element={<Body />}
            >
              <button className="p-3 my-2 bg-green-700 text-white rounded">
                Goto the Home page
              </button>
            </Link>
          </>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  )
}

export default Cart
