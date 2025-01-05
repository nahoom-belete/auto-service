import Navigation from "../partials/Navigation.jsx"

function NewBooking() {
  return (
    <div className="flex flex-col items-center gap-5">
        <Navigation/>
        <h1 className="text-2xl text-center">
            New Booking
        </h1>
        <form className="flex flex-col gap-5">
            <label className="font-bold mr-2" for="vehicle">Select the vehicle to service:</label>
            <select id="vehicle" name="vehicle">
                <option value="polo">Polo</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="Nissan">Nissan</option>
                <option value="suzuki">Suzuki</option>
            </select>
            <label className="font-bold mr-2" for="vehicle">Select the date the service will take place:</label>
            <input type="date"></input>
            <label className="font-bold mr-2" for="vehicle">Select the type of service to be done:</label>
            <select id="vehicle" name="vehicle">
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