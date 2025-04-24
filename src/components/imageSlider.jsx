export default function ImageSlider(props){
    const images=props.images
    console.log(images)
    return(
        <div className="w-full h-full flex flex-col items-center">
            <img src={images[0]} alt="product" className="w-full h-[500px] object-cover"/>
            <div className="w-full mt-[5px] mr-8 h-[150px] flex justify-center">
                {
                    images.map((image,index)=>{
                        return <img key={index} src={image} alt="product" className="w-[100px] h-[100px] object-cover cursor-pointer"/>
                    })
                }
            </div>
            </div>
    )
}