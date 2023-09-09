import User from './User'
import UserClass from './UserClass'
import React from 'react'
import { Component } from 'react'
import GithubUser from './GitHubUser'
import UserContext from '../utils/UserContext'
// const About = () => {
//   return (
//     <>
//       <h1>About us</h1>
//       <h2>Functional component</h2>
//       <User
//         name={'shakil (functional)'}
//         location={'hajipur (functional)'}
//       />
//       <h2>Class base component</h2>
//       <UserClass
//         name={'shakil (class)'}
//         location={'hajipur (class)'}
//       />
//     </>
//   )
// }

// class About extends React.Component{}
class About extends Component {
  constructor(props) {
    super(props)
    // console.log('parent about constructor')
  }

  componentDidMount() {
    // console.log('parent about component did mount')
    // api call
  }

  render() {
    console.log('parent about render')
    return (
      <>
        <h1>Github User</h1>
        {/* <GithubUser /> */}
        <p>====================================================</p>
        <h1>About us</h1>
        <h3>
          <UserContext.Consumer>
            {(data) => <p className="text-bold">{data.loggedInUser}</p>}
          </UserContext.Consumer>
        </h3>
        <h2>Functional component</h2>
        <User
          name={'shakil (functional)'}
          location={'hajipur (functional)'}
        />
        <h2>Class base component</h2>
        <UserClass
          name={'fist (class)'}
          location={'hajipur (class)'}
        />
        <UserClass
          name={'second (class)'}
          location={'patna (class)'}
        />
      </>
    )
  }
}
export default About

// parent about constructor
// parent about render
// first (class)child userClass constructor
// first (class)child userClass render
// second (class)child userClass constructor
// second (class)child userClass render
// first (class)child userClass did mount
// second (class)child userClass did mount
// parent about did mount
