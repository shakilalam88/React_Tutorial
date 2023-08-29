import { useState, useEffect } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {
  // console.log('header')
  // let btnName = 'login';
  const [btnName, setBtnName] = useState('login')

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array in not empty = [btnName] => useEffect is called on every updated [btnName]

  // useEffect(() => {
  //   console.log('useEffect call')
  // }, [btnName])
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src={LOGO_URL}
          alt=""
          className="logo"
        />
      </div>
      <div className="header_navBar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="cart">Cart</Link>
          <Link>
            <button
              onClick={() =>
                btnName === 'login' ? setBtnName('logout') : setBtnName('login')
              }
            >
              {btnName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
