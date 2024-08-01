import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setphone] = useState(null);
    const [role, setRole] = useState("")
    const navigate = useNavigate()


    console.log(email, name, password, phone, role);

    const handleNavigate = () => {
        navigate("/signin")
    }


    return (
        <div className="h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500  flex flex-col items-center justify-center">
            <div className=" bg-white border-2 rounded-xl border-black p-10 flex flex-col items-center gap-4 w-[30%]">
                <p className="text-2xl font-semibold uppercase">SignUp</p>
                <div className="flex flex-col gap-4 w-full">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="p-3 border-b w-ful focus-within:border-b-2 focus-within:border-blue-500 bg-gray-100 focus-within:outline-none  border-black " />
                    <input onChange={(e) => setname(e.target.value)} type="text" placeholder="name" className="p-3 border-b w-ful focus-within:border-b-2 focus-within:border-blue-500 bg-gray-100 focus-within:outline-none border-black " />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-3 border-b w-ful focus-within:border-b-2 focus-within:border-blue-500 bg-gray-100 focus-within:outline-none border-black  " />
                    <input onChange={(e) => setphone(e.target.value)} type="number" placeholder="Phone number" className="p-3 border-b w-ful focus-within:border-b-2 focus-within:border-blue-500 bg-gray-100 focus-within:outline-none border-black  " />
                    <input onChange={(e) => setRole(e.target.value)} type="text" placeholder="Role" className="p-3 border-b w-ful focus-within:border-b-2 focus-within:border-blue-500 bg-gray-100 focus-within:outline-none border-black  " />
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg uppercase">SignUp</button>
                <div>
                    <p>Already have an account? <span onClick={handleNavigate} className="text-blue-600 underline cursor-pointer">SignIn</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;