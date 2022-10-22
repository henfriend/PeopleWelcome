import { BsFillBellFill, BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

function TopNavBar() {
    return(
        <nav className='navbar'>
        <Link to='/'>People <br/> Welcome</Link>
        <ul>
            <li>
                <NavLink to='/settings'>
                    <BsFillGearFill/>
                </NavLink>
            </li>
            <li>
                <NavLink to='/notifications'>
                    <BsFillBellFill/>
                </NavLink>
            </li>
            <li>
                <NavLink to='/myaccount'>
                    <BsPersonCircle/>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default TopNavBar