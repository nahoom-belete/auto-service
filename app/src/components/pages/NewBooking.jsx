import NavigationLoggedIn from "../partials/NavigationLoggedIn.jsx"
import FormPage1 from "../partials/FormPage1.jsx"
import FormPage2 from "../partials/FormPage2.jsx"
import VehicleCard from "../partials/VehicleCard.jsx";
import {useState} from 'react';
import logo from "../../images/logo.webp";

function NewBooking() {
    const currentDate = getCurrentDate();
    const [formData, setFormData] = useState({vehicle:"polo", date: currentDate, service: "minor", 
        dealership:"menlyn-vw"});
    const [activeTab, setActiveTab] = useState(true);

    return (
        <div className="flex flex-col max-h-full">
                <div className="flex flex-col lg:flex-row w-screen min-h-screen">
                    <NavigationLoggedIn/>
                    <div className="flex flex-col bg-[#FFF] shadow-lg w-screen min-h-screen overflow-hidden">
                        <div className="min-w-full min-h-[60px] bg-[#f8f8f8]">
                        
                        </div>
                        <div className="z-30 flex items-end gap-2 border-b-[1px] border-gray-300 
                            min-w-full min-h-[60px]">
                            <a href="#" className="z-50 mb-[-2px] border border-b-[5px] border-b-white rounded text-sm  
                            text-[#201a5e] px-5 py-2">
                                Create Booking
                            </a>
                            <a href="#" className="hover:border-t hover:border-x hover:border-b hover:border-b-transparent 
                            px-5 py-2 rounded text-sm text-gray-40">
                                View Bookings
                            </a>
                        </div>
                        <div className="flex flex-col lg:flex-row w-screen">
                            <div className="m-5 lg:m-10 flex flex-row lg:flex-col gap-2 lg:gap-5 w-fit lg:min-w-[250px] h-fit border-s-[#201a5e] border-s-[5px]">
                                <div className="p-2 lg:p-5 text-xs lg:text-lg h-fit w-fit font-semibold bg-[#c8c1ff]">
                                    Vehicle Selection
                                </div>
                                <div className="p-2 lg:p-5 text-xs lg:text-lg h-fit w-fit font-semibold bg-[#c8c1ff]">
                                    Schedule Date
                                </div>
                                <div className="p-2 lg:p-5 text-xs lg:text-lg h-fit w-fit font-semibold">
                                    Service Type
                                </div>
                                <div className="p-2 lg:p-5 text-xs lg:text-lg h-fit w-fit font-semibold">
                                    Dealership Selection
                                </div>
                            </div>
                            <div className="flex ps-5 lg:justify-start w-full pt-5">
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-screen lg:w-fit pe-1 h-[400px] overflow-y-scroll">
                                    <VehicleCard/>
                                    <VehicleCard/>
                                    <VehicleCard/>
                                    <VehicleCard/>
                                    <VehicleCard/>
                                    <VehicleCard/>
                                    <VehicleCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            {/* <div className="flex max-h-full">
                <NavigationLoggedIn/>
                <FormPage1 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} 
                    setFormData={setFormData} currentDate={currentDate}>
                </FormPage1> 
                <FormPage2 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData}>
                </FormPage2> 
            </div>
             */}
        </div>
    )
}

function getCurrentDate() {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    let month = todayDate.getMonth() + 1;
    let day= todayDate.getDate();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Format the date as dd/mm/yyyy
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}


export default NewBooking