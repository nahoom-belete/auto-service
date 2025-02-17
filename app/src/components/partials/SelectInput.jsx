function SelectInput({options, formData, setFormData, labelContent, htmlFor}) {

    const handleChange = (event) => {
        const { name, value, maxLength } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if(value.length == maxLength) {
            alert(`Maximum characters reached for ${name}`)
        }
    };
    
    return (
        <div className="flex items-center gap-6">
            <label htmlFor="title" className="font-semibold">
                Title
            </label>
        <select value={formData.title} onChange={handleChange} 
                className="bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 
                duration-150 active:border-orange-900 focus:outline-none focus:ring-1 
                focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="title" 
                name="title">
                {options.forEach(option => {
                    <option value={option}>{option}</option>
                })}
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="dr">Dr</option>
        </select>
        </div>
    )
} 
export default SelectInput