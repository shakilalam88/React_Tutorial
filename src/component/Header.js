import { useState, useContext } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
  // console.log('header')
  // let btnName = 'login';
  const [btnName, setBtnName] = useState('login')
  const onlineStatus = useOnlineStatus()

  const { loggedInUser } = useContext(UserContext)
  // console.log('data', { loggedInUser })

  //subscribing to the store using a selector

  const cartItem = useSelector((store) => {
    return store.cart.items
  })
  // console.log(cartItem)

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array in not empty = [btnName] => useEffect is called on every updated [btnName]

  // useEffect(() => {
  //   console.log('useEffect call')
  // }, [btnName])
  return (
    <div className="header flex items-center justify-between bg-[rgba(255,192,203,0.69)]">
      <div className="header_logo">
        <img
          src={LOGO_URL}
          alt=""
          p
          className="logo w-48"
        />
      </div>
      <div className="header_navBar">
        <ul className="flex gap-4">
          <li>online status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>
            <Link
              className="font-bold"
              to="cart"
            >
              Cart : {cartItem.length} items
            </Link>
          </li>
          <li>
            <Link>
              <button
                onClick={() =>
                  btnName === 'login'
                    ? setBtnName('logout')
                    : setBtnName('login')
                }
              >
                {btnName}
              </button>
            </Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
