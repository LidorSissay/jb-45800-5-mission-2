import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink to="/home">Home</NavLink> | <NavLink to="/history">History</NavLink> | <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default Navbar