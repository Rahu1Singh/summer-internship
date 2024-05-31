const defaultClass = " text-white my-4 rounded-md border-green-700 bg-green-700 hover:bg-white hover:text-green-700 hover:font-bold"

const Button = ({className, link, children}) => {
  return ( 
    <a href={link}>
        <button className={`block text-sm md:text-lg ${className ? className : defaultClass} px-5 py-2 border-2 border-solid  transition-all`}>
            {children}
        </button>
    </a>
  )
}

export default Button
