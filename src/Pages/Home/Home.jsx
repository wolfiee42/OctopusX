import React from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import OurFlagshipProject from '../../components/OurFlagshipProject'
import OurPlans from '../../components/OurPlans'
import CeoMsg from "../../components/CeoMsg"
import ContactUs from "../../components/ContactUs"
import HomeBanner from '../../components/HomeBanner'

const Home = () => {
  return (
    <>
      <HomeBanner />
      <WhoWeAre />
      <OurFlagshipProject />
      <CeoMsg />
      <OurPlans />
      <ContactUs />
    </>
  )
}

export default Home
