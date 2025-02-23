import NavLink from "./NavLink"

function NavigationLoggedOut() {
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-[#201a5e] w-full">
      <div className="flex flex-col font-mono font-bold text-3xl self">
        <h1 className="text-white">Auto</h1>
        <h1 className="ps-3 text-white">Service</h1>
      </div>
      <div className=''>
        <div className='flex justify-end items-center flex-auto gap-2'>
          <NavLink href="/" linkText= {'Home'} />
          <NavLink href="/auto-service/signup" linkText= {'Sign Up'} />
          <NavLink href="/auto-service/login" linkText= {'Login'} />
          <NavLink href="/auto-service/new-booking" linkText= {'New Booking'} textColor={"text-primary"} />
          <NavLink href="/auto-service/test" linkText= {'Test'} />
        </div>
      </div>
    </div>
  )
}

export default NavigationLoggedOut