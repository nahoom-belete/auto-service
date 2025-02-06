import "../../styles/App.css"

function NavLink({href, linkText, textColor }) {
  return (
    <div>
      <a href={href} className="text-white hover:text-primary font-bold font-mono">{linkText}</a>
    </div>
  )
}

export default NavLink