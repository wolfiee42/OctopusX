import React from 'react'
import WhoWeAre from '../../components/WhoWeAre'
import OurFlagshipProject from '../../components/OurFlagshipProject'
import OurPlans from '../../components/OurPlans'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>OctopusX</title>
      <link rel="icon" type="image/png" href="/octopus.png" />
    </Helmet>
    {/* Components Done by Amdadul */}
     <WhoWeAre/> 
     <OurFlagshipProject/>
     <OurPlans/>
      {/* Amdadul Components End here */}
    </>
  )
}

export default Home
