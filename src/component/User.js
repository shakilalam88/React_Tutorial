import { useEffect, useState } from 'react'

const User = ({ name, location }) => {
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(2)

  return (
    <div className="user_card">
      <h2>
        Count1: {count}{' '}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          click me
        </button>
      </h2>
      <h2>
        Count2: {count2}{' '}
        <button
          onClick={() => {
            setCount2(count2 + 1)
          }}
        >
          click me
        </button>
      </h2>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>contact: shakilalam@gmail.com</h3>
    </div>
  )
}

export default User
