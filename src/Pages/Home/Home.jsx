import React from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import OurFlagshipProject from '../../components/OurFlagshipProject'
import OurPlans from '../../components/OurPlans'
import { Helmet } from 'react-helmet-async'
import Contact from '../contract/Contact'

const Home = () => {
  return (
    <>
    {/* Components Done by Amdadul */}
      <Helmet>
        <title>OctopusX</title>
        <link rel="icon" type='image/jpeg' href="/icon.jpeg" />
      </Helmet>
     <WhoWeAre/> 
     <OurFlagshipProject/>
     <OurPlans/>
     <Contact/>
      {/* Amdadul Components End here */}
    </>
  )
}

export default Home
