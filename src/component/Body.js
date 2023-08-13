import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Body = () => {
  return (
    <div className="home">
      <div className="filter-btn">
        <button
          onClick={() => {
            const listOfRestaurant = resList.filter(
              (res) => res.data.avgRating > 3.7
            )
            console.log(listOfRestaurant)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res_container">
        {resList.map((resList) => {
          {
            /* console.log(resList.data.id) */
          }
          return (
            <RestaurantCard
              key={resList.data.id}
              resData={resList}
            />
          )
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
