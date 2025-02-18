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
            Page for testing
        </div>
    )
}

export default Test