import NavLink from "./NavLink";
import { HomeIcon, TruckIcon, UserCircleIcon } from '@heroicons/react/24/solid';


const handleHover = (event) => {

}

function NavigationLoggedIn() {
  return (
    <div className="">
      <div className="flex gap-2 h-[80px] w-screen lg:min-h-screen bg-[#201a5e] shadow-lg lg:w-fit">
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-5 items-center w-screen lg:w-fit">
          <div onMouseOver={handleHover} className="flex justify-center group hover:bg-[#c8c1ff] p-5 
              w-full lg:w-fit border-[#c8c1ff] lg:border-e-0">
            <a href="#">
                <UserCircleIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
          </div>
          <div className="flex justify-center group hover:bg-[#c8c1ff] p-5 w-full lg:w-fit">
            <a href="#">
              <HomeIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
          </div>
          <div className="flex justify-center group hover:bg-[#c8c1ff] p-5 w-full lg:w-fit">
            <a href="#">
                <TruckIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
          </div>
        </div>
        <div className="gap-5 hidden">
          <h1 id="profile-notify" className="py-5 text-sm hidden">Profile</h1>
          <h1 className="py-5 text-sm hidden">Dashboard</h1>
          <h1 className="py-5 text-sm hidden">Profile</h1>
        </div>
      </div>
    </div>
   
  )
}

export default NavigationLoggedIn