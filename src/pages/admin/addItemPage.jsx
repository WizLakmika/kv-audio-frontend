import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemPage() {
  const [productkey, setProductkey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimention, setProductDimention] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate=useNavigate();


    async function handleAddItem(){
        console.log(productkey,productName,productPrice,productCategory,productDimention,productDescription)
        const token=localStorage.getItem("token");
        
       
        if(token){
            try{

            
            const result=await axios.post("http://localhost:3000/api/products",{
                key:productkey,
                name:productName,
                price:productPrice,
                category:productCategory,
                dimention:productDimention,
                description:productDescription
            },{
                headers:{
                    Authorization:"Bearer "+ token
                }
            })
            console.log(result)
            toast.success(result.data.message)
            navigate("admin/item")

        }catch(err){
            console.log(err)
            toast.error(err.response.data.error)
        }
        }else{
            toast.error("You are not authorized to add items")
        }
    }

  return (
    <div className="w-full h-full flex items-center flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>
      <div className="w-[400px] border p-4 flex flex-col items-center rounded-lg shadow-md bg-white">
        
        <input
          onChange={(e) => setProductkey(e.target.value)}
          value={productkey}
          type="text"
          placeholder="Product Key"
          className="border p-2 w-full rounded-md mb-2"
        />

        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full rounded-md mb-2"
        />

        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="Number"
          placeholder="Product Price"
          className="border p-2 w-full rounded-md mb-2"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-2 w-full rounded-md mb-2"
        >
          <option key={"audio"}>Audio</option>
          <option key={"lights"}>Lights</option>
        </select>

        <input
          onChange={(e) => setProductDimention(e.target.value)}
          value={productDimention}
          type="text"
          placeholder="Product Dimension"
          className="border p-2 w-full rounded-md mb-2"
        />

        <input
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="border p-2 w-full rounded-md mb-2"
        />

        <button onClick={handleAddItem} className="bg-blue-500 w-full text-white  p-2 rounded-md mt-2 hover:bg-blue-600">
          Add
        </button>

        <button onClick={()=>{navigate("/admin/item")}} className="bg-red-500 w-full text-white  p-2 rounded-md mt-2 hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
}
