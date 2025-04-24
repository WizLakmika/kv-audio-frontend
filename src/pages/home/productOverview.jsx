import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview(){

    const params=useParams();
    const [loadingStatus,setLoadingStatus]=useState("loading");
    const [product,setProduct]=useState({});
    const key=params.key;
   

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/products/${key}`).then((res)=>{
            setProduct(res.data)
            setLoadingStatus("loaded")
            console.log(res.data)
        }).catch((err)=>{
            console.error(err)
            setLoadingStatus("error")
        })
    },[])

    return(
        <div className="w-full h-full flex justify-center">
            {
                loadingStatus=="loading" && <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[20px] h-[70px]  border-b-2 border-b-accent rounded-full animate-spin"></div> 
                        
                    </div>
            }
            {
                loadingStatus=="loaded" && <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[49%] h-full bg-yellow-300">
                        <ImageSlider images={product.image}/>
                    </div>
                    <div className="w-[49%] h-full bg-green-300 flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-accent">{product.name}</h1>
                        <h1 className="text-2xl font-semibold text-gray-600">{product.category}</h1>
                        <p className="text-gray-700 mt-4">{product.description}</p>
                        <p className="text-lg font-bold text-red-500">{product.price}</p>
                        <div className="mt-4 text-sm text-gray-500">
                            <span className="font-medium">Dimensions</span>{product.dimention}
                        </div>
                    </div>


                    </div>
            }
        </div>
    )
}