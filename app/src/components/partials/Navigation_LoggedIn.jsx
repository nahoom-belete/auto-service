import NavLink from "./NavLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCarSide, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

function NavigationLoggedIn() {
  library.add(faUser, faCarSide, faSignOut);
  return (
    <div className="flex justify-between items-center p-5 bg-black">
      <div className="flex gap-2">
        <div className="flex flex-col font-mono font-bold text-3xl self">
          <h1 className="text-white">Auto</h1>
          <h1 className="ps-3 text-orange-500">Service</h1>
        </div>
        <div className="text-white self-end">
          <FontAwesomeIcon icon="car-side" size="2x" />
        </div>
      </div>
      <div className=''>
        <div className='flex justify-end items-center flex-auto gap-5'>
          <div className="text-white self-end hover:scale-105 hover:text-orange-600">
            <a href="#">
              <FontAwesomeIcon icon="sign-out" size="2x" onClick={() => alert("Signed out")}/>
            </a>
          </div>
          <div className="bg-white hover:scale-105 hover:bg-orange-600">
            <a href="#">
              <FontAwesomeIcon icon="user" size="2x" border onClick={()=> alert("Profile clicked")}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationLoggedIn