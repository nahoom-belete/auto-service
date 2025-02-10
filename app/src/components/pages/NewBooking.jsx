import NavigationLoggedIn from "../partials/NavigationLoggedIn.jsx"
import FormPage1 from "../partials/FormPage1.jsx"
import FormPage2 from "../partials/FormPage2.jsx"
import {useState} from 'react';

function NewBooking() {
    const currentDate = getCurrentDate();
    const [formData, setFormData] = useState({vehicle:"polo", date: currentDate, service: "minor", 
        dealership:"menlyn-vw"});
    const [activeTab, setActiveTab] = useState(true);

    return (
        <div>
            <NavigationLoggedIn/>
             <FormPage1 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} 
                setFormData={setFormData} currentDate={currentDate}>
            </FormPage1> 
             <FormPage2 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData}>
            </FormPage2> 
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