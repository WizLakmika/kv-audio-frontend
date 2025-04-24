import Header from "../../components/header";
import {  Routes ,Route } from "react-router-dom";
import Home from "./home";
import Items from "./items";
import Gallery from "./gallery";
import Contact from "./contact";
import ErrorNotFound from "./error";
import LoginPage from "../login/login";
import ProductOverview from "./productOverview";


export default function HomePage(){
    return(
        <>
          <Header/>

        <div className="h-[calc(100vh-100px)] w-full  bg-primary">
            <Routes path="/*">
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/*" element={<ErrorNotFound/>}/>
                <Route path="/product/:key" element={<ProductOverview/>}/>
            </Routes>

        </div>
        </>
    )
}