import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <h1>
        <Link to="/">Jumb to Home page</Link>
      </h1>
      <h1>{error.status}</h1>
      <h1>{error.error.message}</h1>
    </>
  )
}

export default Error
