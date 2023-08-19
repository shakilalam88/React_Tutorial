import { useState } from 'react'
import { LOGO_URL } from '../utils/constant'

const Header = () => {
  console.log('header')
  // let btnName = 'login';
  const [btnName, setBtnName] = useState('login')
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() =>
                btnName === 'login' ? setBtnName('logout') : setBtnName('login')
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
