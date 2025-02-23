import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import TextInput from "../partials/TextInput.jsx";
import signUpImg from "../../images/signup-img.jpg"

function Test() {

    const [formData, setFormData] = useState({name:"", email: "", password:"", verifyPassword:""});

    const validEmailDomains = import.meta.env.VITE_VALID_EMAIL_DOMAINS.split(",");

    library.add(faArrowRight)
  
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
        <div className="flex items-center justify-center min-h-screen p-8 md:p-16">
            <div className="container grid gap-x-5 justify-items-center lg:justify-items-start grid-cols-1 lg:grid-cols-2 max-h-screen-lg max-w-screen-lg rounded bg-white shadow-xl">
                <form className="flex flex-col gap-5 text-sm px-8 lg:px-16 py-10">
                    <div>
                        <h2 className="font-semibold text-3xl text-[#201a5e] mb-2">Sign up now</h2>
                        <p className="text-gray-500">Create a free account</p>
                    </div>
                    <div className="grid gap-3 text-sm grid-cols-1">
                        {/*Name */}
                        <TextInput
                            labelContent="Name" 
                            htmlFor="name" formData={formData} setFormData= {setFormData}  
                            placeholder="Enter your name" maxLength="20" type="text" 
                            id="name" name="name" value={formData.name} 
                        />                     
                        {/*Email */}
                        <TextInput 
                            labelContent="Email" 
                            htmlFor="email" formData={formData} setFormData= {setFormData}  
                            placeholder="Enter your email" maxLength="30" type="email" 
                            id="email" name="email" value={formData.email} validEmailDomains={validEmailDomains}
                        />
                        
                        {/*Password */}
                        <TextInput 
                            labelContent="Password" 
                            htmlFor="password" formData={formData} setFormData= {setFormData}  
                            placeholder="Enter your password" maxLength="20" type="password" 
                            id="password" name="password" value={formData.password}  
                        />
                        {/*Verify Password */}
                        <TextInput  
                            labelContent="Verify Password" 
                            htmlFor="verifyPassword" formData={formData} setFormData= {setFormData}  
                            placeholder="Re-enter your password" maxLength="20" type="password" 
                            id="verify-password" name="verifyPassword" value={formData.verifyPassword} 
                        />        
                    </div>
                    <div className="flex gap-2 w-40 lg:w-80 transition ease-in-out delay-100 duration-150
                        hover:text-white hover:scale-110">
                        <button onClick={handleSubmit} className='bg-[#201a5e] px-3 py-2 w-40 font-semibold lg:w-80 hover:bg-[#c8c1ff] hover:text-[#201a5e] text-white text-sm lg:text-md'> Sign Up </button>
                    </div>
                </form>
                 <div className="hidden lg:block">
                    <img src={signUpImg} alt="Person holds up peace sign from car window" className="max-h-screen w-screen"/>
                </div>
            </div>
        </div>
    )
}

export default Test