import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
import LiveAuction from '../Components/UI/Live-auction/LiveAuction'
import SellerSection from '../Components/UI/Seller-section/SellerSection'
import StepSection from '../Components/UI/Step-section/StepSection'
import Trending from '../Components/UI/Trending-section/Trending'
const Home = () => {
  return (
    <>
      <HeroSection/>
      <LiveAuction/>
      <SellerSection/>
      <Trending/>
      <StepSection/>
    </>
  )
}

export default Home