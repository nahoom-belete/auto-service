import NavLink from "./NavLink"

function NavigationLoggedOut() {
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-black w-full">
      <div className="flex flex-col font-mono font-bold text-3xl self">
        <h1 className="text-white">Auto</h1>
        <h1 className="ps-3 text-orange-500">Service</h1>
      </div>
      <div className=''>
        <div className='flex justify-end items-center flex-auto gap-2'>
          <NavLink href="/" linkText= {'Home'} />
          <NavLink href="/signup" linkText= {'Sign Up'} />
          <NavLink href="/login" linkText= {'Login'} />
          <NavLink href="/new-booking" linkText= {'New Booking'} textColor={"text-primary"} />
        </div>
      </div>
    </div>
  )
}

export default NavigationLoggedOut