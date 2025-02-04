import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

function FormPage1({activeTab, setActiveTab, formData, setFormData}) {
    library.add(faArrowRight)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    const handleClick = () => {
        setActiveTab(!activeTab);
    }

    return (
        <div style={{display: activeTab ? 'block' : 'none'}} className='flex justify-center items-center'>
                <div className="flex flex-col items-center gap-5 h-screen font-sans mt-20 mx-20 ">
                    <form className="text-black flex flex-col gap-5 p-5 w-4/6 items-center rounded-lg bg-white shadow-lg">
                        <h1 className="text-2xl text-center text-black mt-2 font-semibold"> 
                            Create Booking
                        </h1>
                        <div className="flex gap-5">
                            <div id="inputs" className="flex flex-col gap-5">
                                <label htmlFor="vehicle" className="font-semibold">Select the vehicle to service:</label>
                                <select value={formData.vehicle} onChange={handleChange} className=" bg-white py-2 border rounded-lg text-gray-950 transition ease-in-out delay-100 duration-150 active:border-orange-900 focus:outline-none focus:ring-1 focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="vehicle" name="vehicle">
                                    <option value="polo">Polo</option>
                                    <option value="bmw">BMW</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="suzuki">Suzuki</option>
                                </select>

                                <label htmlFor="vehicle" className="font-semibold">Select the date the service will take place:</label>
                                <input value={formData.date} onChange={handleChange} className=" bg-white py-2 border-2 rounded-lg text-gray-950 transition ease-in-out delay-100 duration-150 active:border-orange-900 focus:outline-none focus:ring-1 focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="date" name="date" type="date" min="2025-01-14"></input>

                                <label htmlFor="service" className="font-semibold">Select the type of service to be done:</label>
                                <select value={formData.service} onChange={handleChange} className=" bg-white py-2 border-2 rounded-lg text-gray-950 transition ease-in-out delay-100 duration-150 active:border-orange-900 focus:outline-none focus:ring-1 focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="service" name="service">
                                    <option value="minor">Minor Service</option>
                                    <option value="major">Major Service</option>
                                    <option value="annual">Annual Service</option>
                                    <option value="custom">Custom Service</option>
                                    <option value="10kkm">Recurrent 10000km Service</option>
                                </select>
                                <label htmlFor="dealership" className="font-semibold">Select the dealership to perform the service:</label>
                                <select value={formData.dealership} onChange={handleChange} className=" bg-white py-2 border-2 rounded-lg text-gray-950 transition ease-in-out delay-100 duration-150 active:border-orange-900 focus:outline-none focus:ring-1 focus:ring-orange-800 hover:border-orange-700 hover:scale-105" id="dealership" name="dealership">
                                    <option value="menlyn-vw">Menlyn VW</option>
                                    <option value="menlyn-bmw">Menlyn BMW</option>
                                    <option value="menlyn-mercedes">Menlyn Mercedes</option>
                                    <option value="menlyn-suzuki">Menlyn Suzuki</option>
                                    <option value="menlyn-nissan">Menlyn Nissan</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 self-end p-3 transition ease-in-out delay-100 duration-150 hover:text-orange-600 hover:scale-125">
                        <FontAwesomeIcon icon="arrow-right" size="2x" onClick={handleClick}/>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default FormPage1