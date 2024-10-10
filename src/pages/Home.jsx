import React from 'react'
import Hero from '../componenst/home/Hero'
import Vehicle from '../componenst/home/Vehicle'
import Trending from '../componenst/home/Trending'
import BestSeller from '../componenst/home/BestSeller'
import RecentReview from '../componenst/home/recentReview/RecentReview'
import Slider from '../componenst/home/Slider'
import FindVehicle from '../componenst/home/FindVehicle'
import Footer from '../componenst/Footer'

function Home() {
  return (
    <>
   <Slider />
    <Vehicle />
    <Trending />
    <BestSeller />
    <RecentReview />
    <FindVehicle />
    
      
    </>
  )
}

export default Home
