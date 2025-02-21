import NavLink from "./NavLink";
import { HomeIcon, TruckIcon, UserCircleIcon } from '@heroicons/react/24/solid';


const handleHover = (event) => {

}

function NavigationLoggedIn() {
  return (
    <div>
      <div className="flex gap-2 min-h-screen border-e-2 bg-[#fff] shadow-lg w-[60px]">
        <div className="flex flex-col gap-y-5 items-center w-full">
          <div onMouseOver={handleHover} className="flex justify-center group hover:bg-[#4437a0]  p-5 w-full">
            <a href="#">
                <UserCircleIcon className="size-5 text-[#4437a0] group-hover:text-white" />
            </a>
          </div>
          <div className="flex justify-center group hover:bg-[#4437a0] p-5 w-full">
            <a href="#">
              <HomeIcon className="size-5 text-[#4437a0] group-hover:text-white" />
            </a>
          </div>
          <div className="flex justify-center group hover:bg-[#4437a0] p-5 w-full">
            <a href="#">
                <TruckIcon className="size-5 text-[#4437a0] group-hover:text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 id="profile-notify" className="py-5 text-sm hidden">Profile</h1>
          <h1 className="py-5 text-sm hidden">Dashboard</h1>
          <h1 className="py-5 text-sm hidden">Profile</h1>
        </div>
      </div>
    </div>
   
  )
}

export default NavigationLoggedIn