import { WhatsAppWidget } from "react-whatsapp-widget"
import CeoMsg from "../../components/CeoMsg"
import ContactUs from "../../components/ContactUs"
import 'react-whatsapp-widget/dist/index.css';
// import CompanyIcon from "../../../src/assets/w.png"


const Home = () => {
  return (
    <div>
      <CeoMsg/>
      <ContactUs/>
      <WhatsAppWidget  phoneNumber="+8801850893033" />
    </div>
  )
}

export default Home
