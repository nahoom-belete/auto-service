function SelectInput({options, formData, setFormData, labelContent, htmlFor, value}) {
    console.log(options)
    const handleChange = (event) => {
        const { name, value, maxLength } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    return (
        <div className="flex flex-col gap-2 w-30 h-30 lg:w-60 lg:h-60">
            <label htmlFor={htmlFor} className="font-semibold">
                {labelContent}
            </label>
            <select value={value} onChange={handleChange} 
                    className="bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                    duration-150 active:border-[#371eff]0 focus:outline-none focus:ring-1 
                    focus:ring-[#371eff] hover:border-[#371eff] hover:scale-105 w-30 h-30 lg:w-60 lg:h-60" id="title" 
                    name="title">
                    {options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
            </select>
        </div>
    )
} 
export default SelectInput