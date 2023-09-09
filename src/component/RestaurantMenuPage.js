import useRestaurantMenu from '../utils/useRestaurantMenu'
import { swiggy_menu_api_URL } from '../utils/constant'
import RestaurantCategory from './RestaurantCategory'
import Shimmer from './Shimmer'

import { useParams } from 'react-router-dom'
import { useState } from 'react'

const RestaurantMenuPage = () => {
  const [showIndex, setShowIndex] = useState(0)
  // const [resInfo, setResInfo] = useState(null)
  const { resId } = useParams()
  //   console.log(resId)

  const resInfo = useRestaurantMenu(swiggy_menu_api_URL, resId)

  const dummyData = 'dummy value'

  // useEffect(() => {
  //   fetchMenu()
  // }, [])

  // const fetchMenu = async () => {
  //   const data = await fetch(swiggy_menu_api_URL + resId)
  //   const json = await data.json()

  //   // setResInfo(json.data?.cards[0]?.card?.card?.info)
  //   setResInfo(json.data)
  // }

  if (resInfo === null) return <Shimmer />
  //   console.log(resInfo)

  const { name, avgRating, cuisines } = resInfo?.cards[0]?.card?.card?.info
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // console.log(
  //   'itemCards',
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // )
  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item.card['card']['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
      }
    )
  // console.log('category', category)

  return (
    <div className="menu">
      {category.map((category, index) => {
        {
          /* console.log(category) */
        }
        return (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummyData}
          />
        )
      })}
      {/* <h1>{name}</h1>
      <h1>Rating - {avgRating}</h1>
      <h2>Cuisines - {cuisines.join(' , ')}</h2>
      <h3>Menu List</h3>
      <ul>
        {itemCards.map((menu) => {
          return (
            <li key={menu.card.info.id}>
              {menu.card.info.name}--<b>PRICE-</b>
              {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default RestaurantMenuPage
