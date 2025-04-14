import { useState } from "react";
import "./register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate=useNavigate();

    function register() {
        console.log({ firstName, lastName, email, password, address, phone });
        axios.post(`http://localhost:3000/api/users/`,{
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
            address:address,
            phone:phone
        }).then(()=>{
            toast.success("Registrtion Success")
            navigate("/login")
        }).catch((err)=>{
            toast.error(err?.response?.data?.error||"An error occured")
        })
    }

    return (
        <div className="bg-picture w-full h-screen flex justify-center items-center bg-gray-900">
            <div className="w-[400px] h-[600px] bg-white/30 backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative p-6 shadow-lg">
                <img src="/logo.png" className="w-[100px] h-[100px] object-cover" alt="Logo" />
                
                <input 
                    type="text" 
                    placeholder="First Name" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none placeholder-gray-300"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button 
                    onClick={register} 
                    className="w-[300px] h-[50px] bg-yellow-500 text-2xl text-white rounded-lg my-6 hover:bg-yellow-600 transition duration-300">
                    Register
                </button>
            </div>
        </div>
    );
}
