import "./App.css";
import "./index.css";
import { GoGraph } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-screen flex">

      <div className="w-[400px] h-full bg-green-400">

        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center ">
          <GoGraph/>
          Dashbord
        </button>

        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark/>
          Booking
          </button>

          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <MdOutlineSpeaker/>
          Items
          </button>

          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark/>
          Users
          </button>

        </div>

      <div className="w-full bg-red-500">

    

        </div> 


      </div>
  );
}

export default App;
