import { WhatsAppWidget } from "react-whatsapp-widget"
import CeoMsg from "../../components/CeoMsg"
import 'react-whatsapp-widget/dist/index.css';
import WhoWeAre from '../../components/WhoWeAre'
import OurFlagshipProject from '../../components/OurFlagshipProject'
import OurPlans from '../../components/OurPlans'
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
      <CeoMsg/>
      <OurFlagshipProject />
      <OurPlans />
      <Contact />
      <WhatsAppWidget  phoneNumber="+8801850893033" />
    </>
  )
}

export default Home
