import { CDN_URL } from '../utils/constant'
const RestaurantCard = (props) => {
  const { resData } = props
  const { name, cuisines, avgRating, costForTwo, deleverTime } = resData?.data
  // console.log(typeof parseInt(avgRating))
  return (
    <div
      className="restaurantcard"
      style={{ background: '#f0f0f0' }}
    >
      <img
        src={CDN_URL + resData.data.cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{parseInt(avgRating) > 1 ? avgRating : 'NO RATING'}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deleverTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard
