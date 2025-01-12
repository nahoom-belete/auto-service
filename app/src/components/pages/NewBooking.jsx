import Navigation from "../partials/Navigation.jsx"

function NewBooking() {
  return (
    <div className="flex flex-col items-center gap-5 h-screen font-sans">
        {/* <Navigation/> */}
        <h1 className="text-2xl text-center text-success">
            New Booking
        </h1>
        <form className="text-success flex flex-col gap-5 border-2  p-5 h-3/5 w-3/5 filter drop-shadow-lg">
            <label for="vehicle">Select the vehicle to service:</label>
            <select className="hover:filter hover:drop-shadow-lg text-gray-950" id="vehicle" name="vehicle">
                <option value="polo">Polo</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="Nissan">Nissan</option>
                <option value="suzuki">Suzuki</option>
            </select>
            <label for="vehicle">Select the date the service will take place:</label>
            <input className="hover:filter hover:drop-shadow-lg text-gray-950" type="date"></input>
            <label for="vehicle">Select the type of service to be done:</label>
            <select className="hover:filter hover:drop-shadow-lg text-gray-950" id="vehicle" name="vehicle">
                <option value="minor">Minor Service</option>
                <option value="major">Major Service</option>
                <option value="annual">Annual Service</option>
                <option value="custom">Custom Service</option>
                <option value="10kkm">Recurrent 10000km Service</option>
            </select>
        </form>
    </div>
  )
}

export default NewBooking