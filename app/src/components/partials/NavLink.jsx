import "../../styles/App.css"

function NavLink({href, linkText, textColor }) {
  return (
    <div>
     <a href={href} className="text-primary hover:text-success rounded-sm p-2 text-blogify-background font-bold font-mono">{linkText}</a>
    </div>
  )
}

export default NavLink