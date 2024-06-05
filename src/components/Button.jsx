import { NavLink } from "react-router-dom"

const defaultClass = " text-white my-4 rounded-md border-green-700 bg-green-700 hover:bg-b-100/0 hover:text-green-700 hover:font-bold"

const Button = ({className, link, children}) => {
  return ( 
    
        <button className={`block text-sm md:text-lg ${className ? className : defaultClass} px-5 py-2 border-2 border-solid transition-all`}>
          <NavLink to={link}>
            {children}
          </NavLink>
        </button>
  )
}

export default Button
