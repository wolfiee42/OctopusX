import React from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import OurFlagshipProject from '../../components/OurFlagshipProject'
import OurPlans from '../../components/OurPlans'
import CeoMsg from "../../components/CeoMsg"
import ContactUs from "../../components/ContactUs"
import HomeBanner from '../../components/HomeBanner'
import { Helmet } from 'react-helmet-async'
import Contact from '../contract/Contact'

const Home = () => {
  return (
    <>

      <Helmet>
        <title>OctopusX</title>
        <link rel="icon" type='image/jpeg' href="/iconX.jpeg" />
      </Helmet>
      <HomeBanner />

      <WhoWeAre />
      <OurFlagshipProject />
      <OurPlans />
      <Contact />
    </>
  )
}

export default Home
