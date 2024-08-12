import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar