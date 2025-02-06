import NavigationLoggedIn from "../partials/NavigationLoggedIn.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

function Confirmation() {
   library.add(faThumbsUp)
  
  return (
    <div>
      <NavigationLoggedIn />
      <div className="flex flex-col items-center gap-5 h-screen font-sans mt-20 mx-20 ">
        <div className="text-black flex flex-col gap-5 p-5 w-4/6 items-center rounded-lg bg-white shadow-lg">
            <h1 className="text-2xl text-center text-black mt-2 font-semibold"> 
                Confirmation
            </h1>
            <p>Your car service booking has been confirmed.</p>
            <FontAwesomeIcon icon="thumbs-up" size="5x"/>
        </div>
    </div>
    </div>
  )
}

export default Confirmation