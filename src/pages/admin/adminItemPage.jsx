import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
const sampleArr = [
    {
        key: "prod001",
        name: "Wireless Mouse",
        price: 15.99,
        category: "Electronics",
        dimension: "10cm x 5cm x 3cm",
        
        availability: true
        
    },
    {
        key: "prod002",
        name: "Bluetooth Headphones",
        price: 49.99,
        category: "Electronics",
        dimension: "20cm x 15cm x 8cm",
        
        availability: true
        
    },
    {
        key: "prod003",
        name: "Office Chair",
        price: 120.00,
        category: "Furniture",
        dimension: "100cm x 50cm x 50cm",
       
        availability: true
        
    }
];




export default function AdminItemsPage(){

    const [items,setItems]=useState(sampleArr)

    return(
        <div className="w-full h-full relative ">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                   {
                    items.map((product)=>{
                        return (
                            <tr key={product.key}>
                                <td>{product.key}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.dimension}</td>
                                <td>{product.availability?"Available" : "Not Available"}</td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
            <Link to="/admin/item/add">
            
            
                <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 "/>
            </Link>
            
        </div>

    )
}