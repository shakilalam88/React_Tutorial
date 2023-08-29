import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  // whenever state variable change, react triggers a reconciliation cycle (re-render the component)

  const [resData, setResData] = useState([])
  const [listOfRestaurant, setListOfRestaurant] = useState([])

  const [searchText, setSearchText] = useState('')
  //   console.log(typeof listOfRestaurant)

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()

    // console.log(
    //   'apiData',
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // )
    setResData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  useEffect(() => {
    fetchData()
    // console.log('useEffect')
  }, [])
  // console.log('body component')

  // conditional rendering

  // if (listOfRestaurant.length === 0) {
  //   return <h1>Loading... </h1>
  // }

  // conditional rendering with shimmer ui

  if (listOfRestaurant?.length === 0) {
    return <Shimmer />
  }
  return (
    <div className="home">
      <div className="filter-btn">
        <div className="search-container">
          <input
            type="text"
            name=""
            value={searchText}
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              const filterRestaurant = resData.filter((data) => {
                return data.info.name
                  .toLocaleLowerCase('en-US')
                  .includes(searchText.toLocaleLowerCase('en-US'))
              })
              setListOfRestaurant(filterRestaurant)
              setSearchText('')
            }}
          >
            search
          </button>
        </div>
        <p></p>
        <button
          // onClick={() => {
          //   const listOfRestaurant = resList.filter(
          //     (res) => res.data.avgRating > 3.7
          //   )
          //   setListOfRestaurant(listOfRestaurant)
          // }}
          onClick={() => {
            const updatedData = listOfRestaurant.filter((data) => {
              // console.log('aaa', data.info.avgRating)
              return data.info.avgRating >= 4.5
            })
            setListOfRestaurant(updatedData)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res_container">
        {listOfRestaurant?.map((resList) => {
          // console.log('test', resList?.info?.id)
          if (resList.info) {
            return (
              <Link
                key={resList.info.id}
                to={'/restaurants/' + resList.info.id}
              >
                <RestaurantCard
                  // key={resList?.info?.id}
                  // resData={resList?.info}

                  resData={resList.info}
                />
              </Link>
            )
          }
        })}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} />
        <RestaurantCard resData={resList[10]} />
        <RestaurantCard resData={resList[11]} />
        <RestaurantCard resData={resList[12]} />
        <RestaurantCard resData={resList[13]} />
        <RestaurantCard resData={resList[14]} /> */}
      </div>
    </div>
  )
}

export default Body
