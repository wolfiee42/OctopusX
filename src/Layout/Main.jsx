import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar'
const Main = () => {
  return (
    <div className='pt-28'>
      <div
        className="absolute top-0 left-0 w-full h-28 
        bg-white flex justify-center items-center"
      >
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}
export default Main;
