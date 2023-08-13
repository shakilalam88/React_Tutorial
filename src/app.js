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
import Header from './component/Header'
import Body from './component/Body'

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

const AppLayout = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<AppLayout />)
