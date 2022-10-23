import { BsFillBellFill, BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import BookData from './books.json'

function TopNavBar() {
    return(
        <nav className='navbar'>
        <Link to='/'>People <br/> Welcome</Link>
        <SearchBar placeholder='Search for anything' data={BookData}/>
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