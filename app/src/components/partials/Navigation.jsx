import NavLink from "./NavLink"

function Navigation() {
  return (
    <div className='p-2 flex gap-10 border-b-2 border-gray-300"'>
      <div className='flex justify-end flex-auto gap-2'>
        <NavLink href="/" linkText= {'Home'} />
        <NavLink href="/signup" linkText= {'SignUp'} />
        <NavLink href="/login" linkText= {'Login'} />
        <NavLink href="/new-booking" linkText= {'New Booking'} textColor={"text-primary"} />
      </div>
  </div>
  )
}

export default Navigation