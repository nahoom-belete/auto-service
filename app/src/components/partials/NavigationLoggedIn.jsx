import NavLink from "./NavLink";
import { HomeIcon, TruckIcon, UserCircleIcon, CalendarDateRangeIcon } from '@heroicons/react/24/solid';


function NavigationLoggedIn() {
  return (
    <div className="font-montserrat">
      <div className="flex gap-2 h-[80px] lg:h-screen w-screen lg:w-fit bg-[#1b1b22] p-5">
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-2 items-center w-screen lg:w-[200px]">
          <div className="flex gap-2 group hover:bg-[#c8c1ff] p-2
              w-full">
            <a href="#">
                <UserCircleIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
            <h2 className="text-sm lg:text-lg group-hover:text-[#201a5e] text-white">Profile</h2>
          </div>
          <div className="flex gap-2 group hover:bg-[#c8c1ff] p-2
              w-full">
            <a href="#">
              <HomeIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
            <h2 className="text-sm lg:text-lg group-hover:text-[#201a5e] text-white">Dashboard</h2>
          </div>
          <div className="flex gap-2 group hover:bg-[#c8c1ff] p-2
              w-full">
            <a href="#">
                <TruckIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
            <h2 className="text-sm lg:text-lg group-hover:text-[#201a5e] text-white">Vehicles</h2>
          </div>
          <div className="flex gap-2 group hover:bg-[#c8c1ff] p-2
              w-full">
            <a href="#">
                <CalendarDateRangeIcon className="size-5 text-[#fff] group-hover:text-[#201a5e] w-fit" />
            </a>
            <h2 className="text-sm lg:text-lg group-hover:text-[#201a5e] text-white">Bookings</h2>
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