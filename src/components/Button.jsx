const Button = ({className, link, children}) => {
  return (
    <a href={link}>
        <button className={`block px-5 py-2 rounded-md border-2 border-solid border-green-700 bg-green-700 text-white hover:bg-white hover:text-green-700 hover:font-bold   transition-all ${className || ""}`}>
            {children}
        </button>
    </a>
  )
}

export default Button
