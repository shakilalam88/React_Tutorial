import { LOGO_URL } from '../utils/constant'

const Header = () => {
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
        </ul>
      </div>
    </div>
  )
}

export default Header
