import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function AdminItemsPage() {
    const [items, setItems] = useState([]);
    const [itemsLoaded,setItemsLoaded]=useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        if(!itemsLoaded){
            const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/products", {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log(res.data)
            setItems(res.data);
            setItemsLoaded(true);
            
        }).catch((err) => {
            console.error(err);
        });
        }
    }, [itemsLoaded]);  
    


    const handleDelete = (key) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter((item) => item.key !== key));

            const token = localStorage.getItem("token");

            axios.delete(`http://localhost:3000/api/products/${key}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data);
                setItemsLoaded(false);
            }).catch((err) => {
                console.error("Error deleting item:", err);
            });
        }
    };

    

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center flex-col items-center">
           { !itemsLoaded &&<div className="border-b w-[100px] h-[100px] my-4 border-b-green-500 rounded-full animate-spin border-4">

            </div>}
           { itemsLoaded &&<div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3">Key</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price ($)</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Dimensions</th>
                            <th className="p-3">Availability</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? (
                            items.map((product) => (
                                <tr key={product.key} className="border-b hover:bg-gray-100">
                                    <td className="p-3 text-center">{product.key}</td>
                                    <td className="p-3">{product.name}</td>
                                    <td className="p-3 text-center">${product.price.toFixed(2)}</td>
                                    <td className="p-3 text-center">{product.category}</td>
                                    <td className="p-3 text-center">{product.dimention}</td>
                                    <td className={`p-3 text-center font-semibold ${product.availability ? "text-green-600" : "text-red-600"}`}>
                                        {product.availability ? "Available" : "Not Available"}
                                    </td>
                                    <td className="p-3 text-center">
                                        <button 
                                            onClick={() => navigate("/admin/item/update",{state:product})} 
                                            className="text-blue-600 hover:text-blue-800 mr-3"
                                        >
                                            <AiFillEdit size={20} />
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(product.key)} 
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <AiFillDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-5 text-gray-600">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>}

            <Link to="/admin/item/add" className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition">
                <CiCirclePlus size={50} />
            </Link>
        </div>
    );
}
