import { useState } from "react"

export default function ImageSlider(props){
    const images=props.images
    console.log(images)

    const[selectedImage,setSelectedImage]=useState(images[0]);
    return(
        <div className="w-full h-full flex flex-col items-center">
            <img src={selectedImage} alt="product" className="w-full h-[450px] object-cover"/>
            <div className="w-full mt-[5px] mr-10 h-[150px] flex justify-center gap-5">
                {
                    images.map((image,index)=>{
                        return <img key={index} src={image} alt="product" className={`w-[100px] h-[100px] object-cover cursor-pointer ${image==selectedImage && "border border-accent"}`} onClick={
                            ()=>{
                                setSelectedImage(image);
                            }
                        }/>
                    })
                }
            </div>
            </div>
    )
}