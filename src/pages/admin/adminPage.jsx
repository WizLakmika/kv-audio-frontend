import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import {  Routes ,Route, Link} from "react-router-dom";


export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">

      <div className="w-[400px] h-full bg-green-400">

        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center ">
          <GoGraph/>
          Dashbord
        </button>

        <Link to="/admin/booking" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark/>
          Booking
          </Link>

          <Link to="/admin/item" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <MdOutlineSpeaker/>
          Items
          </Link>

          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegUser/>
          Users
          </button>

        </div>

      <div className="w-[calc(100vw-400px)] bg-red-500">
            <Routes path="/*">
                <Route path="/booking" element={<h1>Booking</h1>}/> 
                <Route path="/item" element={<h1>Items</h1>}/>



            </Routes>
    

        </div> 


      </div>
    )
}