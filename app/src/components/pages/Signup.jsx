import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import NavigationLoggedOut from "../partials/NavigationLoggedOut.jsx";
import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({name:"", surname:"", email: "", phone:"", title: "mr", 
            password:"", address:"", city:"", region:"", postal:""});
    library.add(faArrowRight)

    //Handles changes in form and updates formData state defined in NewBookin                                                                                                       g Component
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:8080/register', {
                method: "POST",
                body: JSON.stringify({formData}),
                headers: {
                    'Content-Type': 'Application/JSON'
                }
            }
        ).then((res) => {return res});
    }

    return (
      <div className="flex flex-col items-center w-screen">
        <NavigationLoggedOut />
        <div className='flex justify-center items-center w-full'>
            <div className="flex flex-col items-center gap-5 h-screen font-sans mt-20 mx-20">
                <form className="text-black flex flex-col gap-5 p-5 w-full items-center rounded-lg 
                    bg-white shadow-lg">
                    <h1 className="text-2xl text-center text-black mt-2 font-semibold"> 
                        Signup
                    </h1>
                    <div className="w-full flex flex-col gap-10">
                        <div id="inputs-personal" className="grid grid-cols-2 gap-5 border-2 rounded-lg p-5">
                          {/*Name */}
                          <div className="flex items-center gap-5">
                            <label htmlFor="name" className="font-semibold">
                                Name
                                </label>
                                <input value={formData.name} onChange={handleChange} placeholder="Enter your name"  type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="" 
                                    name="name">            
                                </input>
                            </div>
                             {/*Surname */}
                            <div className="flex items-center gap-5">
                                <label htmlFor="surname" className="font-semibold">
                                Surname
                                </label>
                                <input value={formData.surname} onChange={handleChange} placeholder="Enter your surname"  type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="surname" 
                                    name="surname">            
                                </input>
                            </div>

                            {/*Email */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="email" className="font-semibold">
                                Email
                                </label>
                                <input value={formData.email} onChange={handleChange} placeholder="Enter your email" type="email" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="email" 
                                    name="email">            
                                </input>
                            </div>

                            {/*Phone */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="phone" className="font-semibold">
                                Phone number
                                </label>
                                <input value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="phone" 
                                    name="phone">            
                                </input>
                            </div>
                            {/*Title */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="title" className="font-semibold">
                                Title
                                </label>
                                <select value={formData.title} onChange={handleChange} className=" 
                                bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="title" 
                                name="title">
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="miss">Miss</option>
                                <option value="dr">Dr</option>
                            </select>
                            </div>
                             {/*Password */}
                             <div className="flex items-center gap-6">
                                <label htmlFor="password" className="font-semibold">
                                Password
                                </label>
                                <input value={formData.password} onChange={handleChange} placeholder="Enter your password" type="password" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="password" 
                                    name="password">            
                                </input>
                            </div>
                            {/*Verify Password */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="verify-password" className="font-semibold">
                                Verify Password
                                </label>
                                <input placeholder="Enter password again" type="password" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="verify-password" 
                                    name="verify-password">            
                                </input>
                            </div>
                        </div>
                        <div id="inputs-address" className="grid grid-cols-2 gap-5 border-2 rounded-lg p-5">
                          {/*Street Address */}
                          <div className="flex items-center gap-5">
                            <label htmlFor="address" className="font-semibold">
                                Street Address
                                </label>
                                <input value={formData.address} onChange={handleChange} placeholder="Enter your street address"  type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="address" 
                                    name="address">            
                                </input>
                            </div>
                             {/*City*/}
                            <div className="flex items-center gap-5">
                                <label htmlFor="city" className="font-semibold">
                                City
                                </label>
                                <input value={formData.city} onChange={handleChange} placeholder="Enter your city"  type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="city" 
                                    name="city">            
                                </input>
                            </div>

                            {/*Region */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="region" className="font-semibold">
                                Region
                                </label>
                                <input value={formData.region} onChange={handleChange} placeholder="Enter your region" type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="region" 
                                    name="region">            
                                </input>
                            </div>
                            {/*Postal code */}
                            <div className="flex items-center gap-6">
                                <label htmlFor="postal" className="font-semibold">
                                Postal code
                                </label>
                                <input value={formData.postal} onChange={handleChange} placeholder="Enter your postal code" type="text" className=" 
                                    bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                                    duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                                    focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="postal" 
                                    name="postal">            
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 self-end p-3 transition ease-in-out delay-100 duration-150
                        hover:text-white hover:scale-125">
                        <button onClick={handleSubmit} className='bg-orange-400 px-3 py-2'> Sign Up </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
}

export default SignUp