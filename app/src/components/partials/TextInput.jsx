function TextInput({labelContent, htmlFor, formData, setFormData, 
    placeholder, maxLength, size, type, id, name, value, validEmailDomains}) {

    const validateEmail = (event) => {
        const { value } = event.target;
        let p = "[a-z]+@(";
        validEmailDomains.forEach(domain => {
            p = p + domain + "|";
        });
        p = p.substring(0, p.length - 1);
        p = p + ")$";
        
        // console.log(pattern)

        const rgexp = new RegExp(p);
        if(rgexp.test(value)) {
            alert("Valid")
        } else {
            alert("Not valid")
        }  
    }

    const validatePhone = (event) => {
        
    }

    const handleChange = (event) => {
        const { name, value, maxLength } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if(value.length == maxLength) {
            alert(`Maximum characters reached for ${name}`)
        }
    };
    
   return (
    <div className="flex items-center gap-5">
         <label htmlFor={htmlFor} className="font-semibold">
            {labelContent}
        </label>
        <input value={value} onBlur={id == "email" ? validateEmail : () => {return 0;} } 
            onChange={handleChange} placeholder={placeholder} maxLength={maxLength} size={size} 
            type={type} autoComplete="true" className=" 
            bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
            duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
            focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id={name} 
            name={name}>            
        </input>
    </div>
   ) 
}

export default TextInput