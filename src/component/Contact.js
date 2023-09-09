// import { useEffect } from 'react'
// const Contact = () => {
//   console.log('render-1')
//   useEffect(() => {
//     console.log('useEffect')

//     const time = setInterval(() => {
//       console.log('useEffect setTimeout')
//     }, 1000)

//     return () => {
//       console.log('return useEffect')
//       clearInterval(time)
//     }
//   }, [])

//   console.log('render-2')
//   return <h1>contact us</h1>
// }

// export default Contact

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Contact
