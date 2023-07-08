// <div class="container">
//   <div class="left">
//     <h1>left h1</h1>
//     <p>left para</p>
//   </div>
//   <div class="right">
//     <h1>right h1</h1>
//     <p>right para</p>
//   </div>
// </div>

// ============================================
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const div = React.createElement(
//   'div',
//   { className: 'container' },
//   React.createElement(
//     'div',
//     { className: 'left' },
//     React.createElement('h1', { className: 'heading' }, 'left h1'),
//     React.createElement('p', { className: 'para' }, 'left para')
//   ),
//   React.createElement(
//     'div',
//     { className: 'right' },
//     React.createElement('h1', { className: 'heading' }, 'right h1'),
//     React.createElement('p', { className: 'para' }, 'right para')
//   )
// )

//JSX (transpiled before it reaches the js)- PARCEL -BABEL

// React Element
// const jsxHeading = (
//   <h1
//     id="heading"
//     className="heading"
//   >
//     Hello world using jsx
//   </h1>
// )
// const jsxSubHeading = <h1>Sub heading</h1>
// const Heading = () => {
//   return (
//     <>
//       <h1>Heading Components 1</h1>
//       <h1>Heading Components 2</h1>
//     </>
//   )
// }
// console.log(jsxHeading)
// React Component

// const HeadingComponent = () => {
//   return (
//     <>
//       {jsxHeading.props.children}
//       {jsxSubHeading}
//       {/* <Heading /> */}
//       {/* {Heading()} */}
//       <Heading></Heading>
//       <h2>Hello World!</h2>
//       <p>para</p>
//     </>
//   ) // JSX is just syntactic sugar
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<HeadingComponent />)
// =====================================

import React from 'react'
import ReactDOM from 'react-dom/client'

/* 
 --Header
   -Logo
   -Nav items
 --Body
   -Search bar
   -RestaurantContainer
     -RestaurantCard
 --Footer
   -CopyRight
   -Links
   -Address
   -Contact
*/
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="https://www.designmantic.com/logo-images/5807.png?company=Company+Name&slogan=&verify=1"
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

const RestaurantCard = () => {
  return (
    <div
      className="restaurantcard"
      style={{ background: '#f0f0f0' }}
    >
      <img
        src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=826&t=st=1688799498~exp=1688800098~hmac=ace898f5d28b0f45b72ec9ff865f06a00c7163e0bbf40d15c888664e23873654"
        alt=""
      />
      <h3>Hichkii Restaurant</h3>
      <h4>Burger</h4>
      <h4>4.4 star</h4>
      <h4>20 min</h4>
    </div>
  )
}

const Home = () => {
  return (
    <div className="home">
      <div className="search">Search</div>
      <div className="res_container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <Home />
      {/* Footer */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<AppLayout />)
