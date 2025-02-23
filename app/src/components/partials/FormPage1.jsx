import SelectInput from "../partials/SelectInput.jsx";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function FormPage1({activeTab, setActiveTab, formData, setFormData, currentDate}) {
    //Handles changes in form and updates formData state defined in NewBooking Component
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
    //Sets the active tab of the form
    const handleClick = () => {
        setActiveTab(!activeTab);
    }

    return (
        <div style={{display: activeTab ? 'block' : 'none'}} className='flex max-h-screen mt-5'>
            <div className="flex justify-center gap-5 font-sans ">
                <form className="text-black flex gap-5 p-5 w-4/6 items-center ">
                    <div className="flex flex-col gap-5">
                        <div id="inputs" className="grid grid-cols-2 gap-x-40">
                            {/*Vehicle selection */}
                            <SelectInput 
                                labelContent="Select the vehicle to service:" htmlFor="vehicle" formData={formData} 
                                setFormData={setFormData}
                                options={["Polo", "Bmw", "Mercedes", "Nissan", "Suzuki"]} value={formData.vehicle}
                            />   
                            {/*Date input*/}
                            <div className="flex flex-col gap-2 w-30 lg:w-60 h-30 lg:h-60">
                                <label htmlFor="date" className="font-semibold">
                                    Date the service will take place:
                                </label>
                                <input value={formData.date} onChange={handleChange} 
                                    className="bg-white py-2 border-2 rounded-lg text-gray-950 transition 
                                    ease-in-out delay-100 duration-150 active:border-[#371eff] focus:outline-none 
                                    focus:ring-1 focus:ring-[#371eff] hover:border-[#371eff] hover:scale-105 w-30 lg:w-60 h-30 lg:h-60" id="date" 
                                    name="date" type="date" min={currentDate}>
                                </input>
                            </div>
                           
                            {/*Service selection */}
                            <SelectInput 
                                labelContent="Select the type of service to be done:" 
                                htmlFor="service" formData={formData} 
                                setFormData={setFormData}
                                options={["Minor", "Major", "Annual", "Custom", "Recurrent"]} 
                                value={formData.service}
                            /> 
                                {/* <option value="minor">Minor Service</option>
                                <option value="major">Major Service</option>
                                <option value="annual">Annual Service</option>
                                <option value="custom">Custom Service</option>
                                <option value="10kkm">Recurrent 10000km Service</option> */}
                            {/*Dealership selection */}
                            <SelectInput 
                                labelContent="Dealership to perform the service:" 
                                htmlFor="dealership" formData={formData} 
                                setFormData={setFormData}
                                options={["VW", "BMW", "Mercedes", "Suzuki", "Nissan"]} 
                                value={formData.dealership}
                            /> 
                        </div>
                    </div>
                    <div className="flex gap-2 self-end p-3 transition ease-in-out delay-100 duration-150 
                        hover:text-[#371eff] hover:scale-125">
                        <ArrowRightIcon className="size-6 text-[#371eff] group-hover:text-white" onClick={handleClick} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage1