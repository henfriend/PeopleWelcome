import { BsFillBellFill, BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import BookData from './Data.json'
import { useEffect, useState } from 'react'

function TopNavBar() {
    const location = useLocation() // to keep track of the current route
    const [navClass, setNavClass] = useState('navbar invisible') // state of navbar classes

    // navbar disappears on the login page
    useEffect(() => {
        if(location.pathname !== '/') {
            setNavClass('navbar')
        } else {
            setNavClass('navbar invisible')
        }
      }, [location])

    return(
        <nav className={navClass}>
        <Link to='/homepage'>People <br/> Welcome</Link>
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