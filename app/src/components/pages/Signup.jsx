import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import NavigationLoggedOut from "../partials/NavigationLoggedOut.jsx";
import TextInput from "../partials/TextInput.jsx";
import SelectInput from "../partials/SelectInput.jsx";
import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({name:"", surname:"", email: "", phone:"", title: "mr", 
            password:"", address:"", city:"", region:"", postal:""});
    const [verifyPassword, setVerifyPassword] = useState("");

    const validEmailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "aol.com", "hotmail.co.uk", "msn.com"];
    library.add(faArrowRight)

      
    
      const handleSubmit = async (event) => {
        form
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
                            <TextInput 
                                labelContent="Name" 
                                htmlFor="name" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your name" maxLength="20" size="20" type="text" 
                                id="name" name="name" value={formData.name} 
                            />
                            {/*Surname */}
                            <TextInput 
                                labelContent="Surname" 
                                htmlFor="surname" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your surname" maxLength="20" size="20" type="text" 
                                id="surname" name="surname" value={formData.surname} 
                            />
                            {/*Email */}
                            <TextInput 
                                labelContent="Email" 
                                htmlFor="email" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your email" maxLength="30" size="20" type="email" 
                                id="email" name="email" value={formData.email} validEmailDomains={validEmailDomains} 
                            />

                            {/*Phone */}
                            <TextInput 
                                labelContent="Phone number" 
                                htmlFor="phone" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your phone number" maxLength="10" size="10" type="tel" 
                                id="phone" name="phone" value={formData.phone} 
                            />
                            {/*Title */}
                            <SelectInput 
                                labelContent="Title" 
                                htmlFor="title" formData={formData} setFormData= {setFormData}   
                                id="title" name="title" options={["mr","mrs", "miss", "dr"]}
                            />
                            
                             {/*Password */}
                             <TextInput 
                                labelContent="Password" 
                                htmlFor="password" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your password" maxLength="20" size="15" type="password" 
                                id="password" name="password" value={formData.password}  
                            />
                            {/*Verify Password */}
                            <TextInput  
                                labelContent="Verify Password" 
                                htmlFor="verify-password" formData={formData} setFormData= {setFormData}  
                                placeholder="Re-enter your password" maxLength="20" size="15" type="password" 
                                id="verify-password" name="verify-password" value={{}} 
                            />
                        </div>
                        <div id="inputs-address" className="grid grid-cols-2 gap-5 border-2 rounded-lg p-5">
                          {/*Street Address */}
                            <TextInput 
                                labelContent="Street Address" 
                                htmlFor="address" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your street address" maxLength="30" size="15" type="text" 
                                id="address" name="address" value={formData.address} 
                            />
                             {/*City*/}
                             <TextInput 
                                labelContent="City" 
                                htmlFor="city" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your city" maxLength="20" size="10" type="text" 
                                id="city" name="city" value={formData.city} 
                            />               
                            {/*Region */}
                            <TextInput 
                                labelContent="Region" 
                                htmlFor="region" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your region" maxLength="20" size="10" type="text" 
                                id="region" name="region" value={formData.region} 
                            />
                            {/*Postal code */}
                            <TextInput  
                                labelContent="Postal" 
                                htmlFor="postal" formData={formData} setFormData= {setFormData}  
                                placeholder="Enter your postal code" maxLength="10" size="10" type="text" 
                                id="postal" name="postal" value={formData.postal} 
                            />
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