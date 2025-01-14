import Navigation from "../partials/Navigation.jsx"
import {useState} from 'react';

function NewBooking() {
    const [formData, setFormData] = useState({vehicle:"polo", date: "", service: "minor"})

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await fetch(
            'http://localhost:8080/new-booking', {
                method: "POST",
                body: JSON.stringify({formData}),
                headers: {
                    'Content-Type': 'Application/JSON'
                }
            });
            res = await res.json();
        
            {/*Resets the input states*/}
            if (result) {
                alert("Data saved succesfully");
            }
    }

    return (
        <div className="flex flex-col items-center gap-5 h-screen font-sans">
             <Navigation/>
            <h1 className="text-2xl text-center text-success mt-2">
                Create Booking
            </h1>
            <form className="text-success flex flex-col gap-5 p-5 h-3/5 w-3/5 rounded-lg bg-white shadow-lg">
                <label htmlFor="vehicle" className="font-semibold">Select the vehicle to service:</label>
                <select value={formData.vehicle} onChange={handleChange} className="bg-white border-2 rounded-lg text-gray-950 hover:border-orange-600" id="vehicle" name="vehicle">
                    <option value="polo">Polo</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="Nissan">Nissan</option>
                    <option value="suzuki">Suzuki</option>
                </select>

                <label htmlFor="vehicle" className="font-semibold">Select the date the service will take place:</label>
                <input value={formData.date} onChange={handleChange} className="bg-white border-2 rounded-lg text-gray-950" id="date" name="date" type="date" min="2025-01-14"></input>

                <label htmlFor="service" className="font-semibold">Select the type of service to be done:</label>
                <select value={formData.service} onChange={handleChange} className="bg-white border-2 rounded-lg text-gray-950" id="service" name="service">
                    <option value="minor">Minor Service</option>
                    <option value="major">Major Service</option>
                    <option value="annual">Annual Service</option>
                    <option value="custom">Custom Service</option>
                    <option value="10kkm">Recurrent 10000km Service</option>
                </select>
                <div className="self-end p-3">
                    <button onClick={handleSubmit} className="bg-orange-400 px-3 py-2">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default NewBooking