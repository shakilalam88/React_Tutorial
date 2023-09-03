import { useState, useEffect } from 'react'

const useRestaurantMenu = (URL, resId) => {
  const [resInfo, setResInfo] = useState(null)

  // fetchdata
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(URL + resId)
    const json = await data.json()
    setResInfo(json.data)
  }

  return resInfo
}

export default useRestaurantMenu
