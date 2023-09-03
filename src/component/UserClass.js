import React from 'react'
class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1,
      count2: 2,
    }
    // console.log(this.props.name + 'child userClass constructor')
  }

  componentDidMount() {
    // console.log(this.props.name + 'child userClass did mount')
    // api call
  }

  render() {
    // console.log(this.props.name + 'child userClass render')
    const { name, location } = this.props
    const { count, count2 } = this.state
    return (
      <div className="user_card">
        <h2>
          count1: {count}{' '}
          <button
            onClick={() => {
              //never update state variables directly
              //   this.state.count = this.state.count + 1

              this.setState({
                count: this.state.count + 1,
              })
            }}
          >
            click me 1
          </button>
        </h2>
        <h2>
          count2: {count2}{' '}
          <button
            onClick={() => {
              this.setState({
                count2: this.state.count2 + 1,
              })
            }}
          >
            click me 2
          </button>
        </h2>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>contact: shakilalam@gmail.com</h3>
      </div>
    )
  }
}

export default UserClass
