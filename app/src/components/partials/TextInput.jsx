import { useState } from "react";
function TextInput({labelContent, htmlFor, formData, setFormData, 
    placeholder, maxLength, size, type, id, name, value, validEmailDomains}) {

    const [errorMsg, setErrorMsg] = useState("");

    const validateEmail = (event) => {
        const { value } = event.target;
        let { placeholder } = event.target;
        let p = "[a-z]+@(";
        validEmailDomains.forEach(domain => {
            p = p + domain + "|";
        });
        p = p.substring(0, p.length - 1);
        p = p + ")$";
        
        // console.log(pattern)

        const rgexp = new RegExp(p);
        if(!rgexp.test(value))
            setErrorMsg("Email entered is invalid");
    }

    const validatePhone = (event) => {
        
    }

    const handleChange = (event) => {
        const { name, value, maxLength } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if(value.length == maxLength) {
            setErrorMsg(`Maximum characters reached for ${name}`);
        }
    };
    
   return (
    <div className="flex flex-col gap-2 w-40 lg:w-80">
         <label htmlFor={htmlFor} className="font-semibold text-gray-700">
            {labelContent}
        </label>
        <input value={value} onBlur={id == "email" ? validateEmail : () => {return 0;} } 
            onChange={handleChange} placeholder={placeholder} maxLength={maxLength}
            type={type} autoComplete="true" className=" 
            bg-white p-2 border rounded text-gray-950 transition ease-in-out delay-100 
            duration-150 active:border-[#201a5e] focus:outline-none focus:ring-1
            focus:ring-blue-600 hover:border-[#201a5e] hover:scale-105" id={name} 
            name={name}>            
        </input>
        <div className="text-red-600 font-semibold">{errorMsg}</div>
    </div>
   ) 
}

export default TextInput