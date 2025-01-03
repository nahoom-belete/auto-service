function NavLink({href, linkText }) {
  return (
    <div>
     <a href={href} className="rounded-sm bg-green-700 p-2 text-blogify-background font-bold font-mono">{linkText}</a>
    </div>
  )
}

export default NavLink