import "../../styles/App.css"

function NavLink({href, linkText, textColor }) {
  return (
    <div>
      <a href={href} className="text-gray-500 hover:text-blue-600 font-bold">{linkText}</a>
    </div>
  )
}

export default NavLink