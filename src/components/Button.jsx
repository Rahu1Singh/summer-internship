const defaultClass = " text-white my-4 rounded-md border-b-700 bg-b-700 hover:bg-b-100/0 hover:text-b-700 hover:font-bold"

const Button = ({className, link, children}) => {
  return ( 
    
        <button className={`block text-sm md:text-lg ${className ? className : defaultClass} px-5 py-3 border-2 border-solid transition-all`}>
          <a href={link}>
            {children}
          </a>
        </button>
  )
}

export default Button
