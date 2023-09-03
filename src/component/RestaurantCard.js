import { CDN_URL } from '../utils/constant'
const RestaurantCard = (props) => {
  // console.log('data', props.resData)
  // const name = props.resData?.name

  if (props.resData) {
    const { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId } =
      props.resData
    // console.log(typeof parseInt(avgRating))
    return (
      <div
        className="restaurantcard"
        style={{ background: '#f0f0f0' }}
      >
        {/* <img
        src={CDN_URL + resData.data.cloudinaryImageId}
        alt=""
      /> */}
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h3>{name}</h3>
        <h4>{cuisines.slice(0, 3)}</h4>
        <h4>{parseInt(avgRating) > 1 ? avgRating : 'NO RATING'}</h4>
        <h4>${costForTwo.slice(1, 5) / 2}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    )
  }
}

// Higher order component
// input - resturantcard
export const withRatingLave = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label
          className="relative bg-black text-white"
          htmlFor=""
        >
          best rating rest
          <RestaurantCard {...props} />
        </label>
      </>
    )
  }
}

export default RestaurantCard
