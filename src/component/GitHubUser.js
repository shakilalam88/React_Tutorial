import { Component } from 'react'

class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'default',
        avatar_url: 'avatar_url',
      },
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/shakilalam88')
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo: json,
    })
  }
  render() {
    const { name, following, avatar_url } = this.state.userInfo
    return (
      <div className="github-user">
        <div className="github_user_card">
          <img
            src={avatar_url}
            alt=""
          />
          <h2>Name: {name}</h2>
          <h3>following: {following}</h3>
          <h3>contact: shakilalam@gmail.com</h3>
        </div>
      </div>
    )
  }
}

export default GithubUser
