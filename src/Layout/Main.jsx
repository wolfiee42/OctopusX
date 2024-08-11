import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div  className="pt-40">
      <div
        className="absolute top-0 left-0 w-full h-28 
        bg-white flex justify-center items-center"
      >
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
