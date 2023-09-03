import { useEffect } from 'react'
const Contact = () => {
  console.log('render-1')
  useEffect(() => {
    console.log('useEffect')

    const time = setInterval(() => {
      console.log('useEffect setTimeout')
    }, 1000)

    return () => {
      console.log('return useEffect')
      clearInterval(time)
    }
  }, [])

  console.log('render-2')
  return <h1>contact us</h1>
}

export default Contact
