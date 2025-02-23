

function StatusBar({color, message, isVisible}) {
  return (
    <div id="status" style={{display: isVisible? 'block' : 'none'}} 
      className={`p-3 text-center font-bold ${color} w-full`}>
      {message}
      </div>
  )
}

export default StatusBar