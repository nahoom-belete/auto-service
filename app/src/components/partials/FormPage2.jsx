import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import StatusBar from './StatusBar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function FormPage2({activeTab, setActiveTab, formData}) {
    const [isVisible, setIsVisible] = useState(false);
    const [color, setColor] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    library.add(faArrowLeft)

    const handleClick = () => {
        setActiveTab(!activeTab);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:8080/new-booking', {
                method: "POST",
                body: JSON.stringify({formData}),
                headers: {
                    'Content-Type': 'Application/JSON'
                }
            }
        );

        if(res.ok) {
            setColor('bg-orange-400');
            setMessage('Car Service successfully booked');
            setIsVisible(true);
            setTimeout( () => {
                setIsVisible(false);
              }, 3000);
              navigate("/confirm");
        } else {
            setColor('bg-red-400')
            setMessage('Car Service booking unsuccessful');
            setIsVisible(true);
            setTimeout( () => {
                setIsVisible(false);
              }, 3000);
        }
    }

    return (
        <div style={{display: activeTab ? 'none' : 'block'}} className='flex justify-center items-center'>
            <StatusBar message={message} color={color} isVisible={isVisible}/>
            <div className="flex flex-col items-center gap-5 h-screen font-sans mt-20 mx-20 ">
                <div className="text-black flex flex-col gap-5 p-5 w-4/6 items-center rounded-lg bg-white shadow-lg">
                    <h1 className="text-2xl text-center text-black mt-2 font-semibold"> 
                        Summary
                    </h1>
                    <div className="flex gap-5">
                        <div id="summary" className="flex flex-col gap-5">
                            <div className="p-5 flex gap-2">
                                <div className="flex flex-col text-black">
                                    <p className="font-semibold text-xl">Selected Vehicle:</p>
                                    <p className="font-semibold text-xl">Selected Date:</p>
                                    <p className="font-semibold text-xl">Selected Service:</p>
                                    <p className="font-semibold text-xl">Selected Dealership:</p>
                                </div>
                                <div className="flex flex-col text-black">
                                    <p className="uppercase text-xl">{formData.vehicle}</p>
                                    <p className="uppercase text-xl">{formData.date}</p>
                                    <p className="uppercase text-xl">{formData.service}</p>
                                    <p className="uppercase text-xl">{formData.dealership}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-72'>
                        <div className="flex self-start p-3 transition ease-in-out delay-100 duration-150 hover:text-orange-600 hover:scale-125">
                            <FontAwesomeIcon icon="arrow-left" size="2x" onClick={handleClick}/>
                        </div>
                        <div className="flex gap-2 self-end p-3 transition ease-in-out delay-100 duration-150 hover:text-white hover:scale-125">
                            <button onClick={handleSubmit} className='bg-orange-400 px-3 py-2'> Book </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage2