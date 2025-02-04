import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

function FormPage2({activeTab, setActiveTab, formData}) {
    library.add(faArrowLeft)

    const handleClick = () => {
        setActiveTab(!activeTab);
    }

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
        <div style={{display: activeTab ? 'none' : 'block'}} className='flex justify-center items-center'>
            <div className="flex flex-col items-center gap-5 h-screen font-sans mt-20 mx-20 ">
                <div className="text-black flex flex-col gap-5 p-5 w-4/6 items-center rounded-lg bg-white shadow-lg">
                    <h1 className="text-2xl text-center text-black mt-2 font-semibold"> 
                        Summary
                    </h1>
                    <div className="flex gap-5">
                        <div id="summary" className="flex flex-col gap-5">
                            <div className="p-5">
                                <div className="flex flex-col text-black self-end">
                                    <div className="flex gap-2">
                                        <p className="font-semibold text-xl">Selected vehicle:</p> <p className="uppercase">{formData.vehicle}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold text-xl">Selected date:</p> <p className="uppercase">{formData.date}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold text-xl">Selected service:</p> <p className="uppercase">{formData.service}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p className="font-semibold text-xl">Selected dealership:</p> <p className="uppercase">{formData.dealership}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-72'>
                        <div className="flex self-start p-3 transition ease-in-out delay-100 duration-150 hover:text-orange-600 hover:scale-125">
                            <FontAwesomeIcon icon="arrow-left" size="2x" onClick={handleClick}/>
                        </div>
                        <div className="flex gap-2 self-end p-3 transition ease-in-out delay-100 duration-150 hover:text-white hover:scale-125">
                            <button onClick={handleSubmit} className='bg-orange-400 px-3 py-2'> Submit </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FormPage2