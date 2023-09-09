import { useDispatch } from 'react-redux'
import { CDN_URL } from '../utils/constant'
import { addItem } from '../utils/cartSlice'
const ItemList = ({ items, dummy }) => {
  console.log('items', items)
  // console.log('dummydata', dummy)
  //   console.log('item', item)

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <>
      {items.map((item) => {
        const { name, price, description, imageId } = item?.card?.info
        return (
          <div
            key={item?.card?.info?.id}
            className="itemCart p-4  border-gray-200 flex gap-4 justify-between border-b-2"
          >
            <div className="8/12">
              <span className=" font-bold ">Name:-{name} --</span>
              <span>price:-{price / 100}</span>
              <p className="">{description}</p>
            </div>
            <div className="4/12 relative">
              <img src={CDN_URL + imageId} />
              <button
                // onClick={handleAddItem}
                // onClick={handleAddItem(item)} // calling the function now
                onClick={() => handleAddItem(item)} // call back function
                className="absolute top-0 bg-green-400 p-1"
              >
                Add +
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default ItemList
