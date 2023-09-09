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

import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Body from './component/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// import About from './component/About'
import Contact from './component/Contact'
import Error from './component/Error'
import RestaurantMenuPage from './component/RestaurantMenuPage'
import Shimmer from './component/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './component/Cart'
// import Grocery from './component/Grocery'

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
//Make smaller modules, code-splitting, chunking, Dynamic Bundling, Lazy Loading, on demand load

const Grocery = lazy(() => import('./component/Grocery'))
const About = lazy(() => import('./component/About'))

const AppLayout = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    //make an api call and send username and password
    const data = {
      //dummy data
      name: 'shakil alam',
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          {/* Header */}
          {/* <UserContext.Provider value={{ loggedInUser: 'testing' }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          {/* Body */}
          {/* <Body /> */}
          {/* Footer */}
        </div>
      </UserContext.Provider>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h>loading</h>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h>loading</h>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenuPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={appRouter} />)
