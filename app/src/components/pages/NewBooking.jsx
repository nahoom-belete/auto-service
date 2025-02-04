import NavigationLoggedIn from "../partials/Navigation_LoggedIn.jsx"
import FormPage1 from "../partials/Form_Page1.jsx"
import FormPage2 from "../partials/Form_Page2.jsx"
import {useState} from 'react';

function NewBooking() {
    const [formData, setFormData] = useState({vehicle:"polo", date: "", service: "minor", dealership:"menlyn-vw"})
    const [activeTab, setActiveTab] = useState(true);

    return (
        <div>
            <NavigationLoggedIn/>
             <FormPage1 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData} setFormData={setFormData}></FormPage1> 
             <FormPage2 activeTab={activeTab} setActiveTab={setActiveTab} formData={formData}></FormPage2> 
        </div>
    )
}


export default NewBooking