

function NavLink({href, linkText, textColor }) {
  return (
    <div>
      <a href={href} className="text-white hover:text-[#201a5e] hover:bg-[#c8c1ff] font-bold">{linkText}</a>
    </div>
  )
}

export default NavLink