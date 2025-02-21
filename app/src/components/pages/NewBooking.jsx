import NavigationLoggedIn from "../partials/NavigationLoggedIn.jsx"
import FormPage1 from "../partials/FormPage1.jsx"
import FormPage2 from "../partials/FormPage2.jsx"
import {useState} from 'react';
import logo from "../../images/logo.webp";

function NewBooking() {
    const currentDate = getCurrentDate();
    const [formData, setFormData] = useState({vehicle:"polo", date: currentDate, service: "minor", 
        dealership:"menlyn-vw"});
    const [activeTab, setActiveTab] = useState(true);

    return (
        <div className="flex flex-col max-h-full">
                <div className="bg-[#FFF] shadow-lg w-screen min-h-[40px] border-b-[1px] border-gray-300">
                </div>
                <div className="flex w-screen min-h-screen">
                    <NavigationLoggedIn/>
                    <div className="flex-flex-col bg-[#FFF] shadow-lg w-screen min-h-screen">
                        <div className="min-w-full min-h-[60px] bg-[#f8f8f8]">
                        
                        </div>
                        <div className="z-30 flex items-end gap-2 ps-5 border-b-[1px] border-gray-300 
                            min-w-full min-h-[60px]">
                            <a href="#" className="z-50 mb-[-2px] border border-b-[5px] border-b-white rounded text-sm  
                            text-[#4437a0] px-5 py-2">
                                Create
                            </a>
                            <a href="#" className="hover:border-t hover:border-x hover:border-b hover:border-b-transparent 
                            px-5 py-2 rounded text-sm text-gray-40">
                                View
                            </a>
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