import { NavLink } from "react-router-dom"

const defaultClass = "text-sm lg:text-lg text-white my-4 rounded-md border-b-700 bg-b-700 hover:bg-b-100/0 hover:text-b-700 hover:font-bold"

const Button = ({className, link, children}) => {
  return ( 
    
        <NavLink to={link} className={`block ${className ? className : defaultClass} px-3 lg:px-5 py-2 lg:py-3 border-2 border-solid transition-all flex justify-center`}>
            {children}
        </NavLink>
  )
}

export default Button
