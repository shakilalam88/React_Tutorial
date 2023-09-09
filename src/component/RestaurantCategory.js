import { useState } from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  //   const [show, setShow] = useState(false)
  //   console.log('show', show)
  //   console.log(data)
  const { title } = data
  const handelClick = () => {
    //code
    setShowIndex()
  }
  return (
    <div className="accordion w-6/12  bg-gray-50 shadow-lg  mx-auto mb-2  px-4">
      {/* accordion header */}
      <div className="accordion_header py-2 my-4 flex justify-between">
        <span className="font-bold">
          {title} ({data.itemCards.length})
        </span>
        <span
          className="cursor-pointer"
          onClick={handelClick}
        >
          ⬇️
        </span>
      </div>
      {/* accordion body */}

      {showItem && (
        <ItemList
          items={data?.itemCards}
          dummy={dummy}
        />
      )}
      {/* {showItem &&
        data?.itemCards?.map((item, index) => {
          return (
            <ItemList
              key={index}
              items={item.card.info}
              dummy={dummy}
            />
          )
        })} */}
    </div>
  )
}

export default RestaurantCategory
