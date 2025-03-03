import Header from "../../components/header";
import {  Routes ,Route } from "react-router-dom";
import Home from "./home";
import Items from "./items";
import Gallery from "./gallery";
import Contact from "./contact";
import ErrorNotFound from "./error";

export default function HomePage(){
    return(
        <>
          <Header/>

        <div className="h-[calc(100vh-100px)] w-full ">
            <Routes path="/*">
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/*" element={<ErrorNotFound/>}/>
            </Routes>

        </div>
        </>
    )
}