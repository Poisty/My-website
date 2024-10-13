import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState  } from 'react'

function Nav() {
    const [url, setUrl] = useState("")
    const location = useLocation()
    const currentUrl = location.pathname

    useEffect(()=> {
        setUrl(currentUrl)
    }, [currentUrl])


    return (
        <nav>
            <ul>
                {url !== "/" && <li>
                    <Link to="/">Home</Link>
                </li>}
                
                <li className="dropdown">
                    <Link to="#">Courses</Link>
                    <div className="dropdown-content">
                        <Link to="/programming">Programmering</Link>
                        <Link to="#">Network and security</Link>
                        <Link to="#">Algorithms and datastructures</Link>
                    </div>
                </li>
                <li className="dropdown">
                    <Link to="#">Projects</Link>
                    <div className="dropdown-content">
                        <a target='_blank' href="/LAB01.pdf">Lab 1 rapport</a>
                        <a target='_blank' href="/Lab2_Rapport.pdf">Lab 2 rapport</a>
                        <a target='_blank' href="/Lab3_Rapport.pdf">Lab 3 rapport</a>
                        <a target='_blank' href="/Lab_4_Dynamisk_ruting.pdf">Lab 4 rapport</a>
                        <Link to="#"></Link>
                    </div>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export function NavItem() {
    return (
        <li className="dropdown">
            <a Link to="#">Courses</a>
            <div className="dropdown-content">
                <a Link to="#">Programming</a>
                <a Link to="#">Data Structures</a>
                <a Link to="#">Algorithms</a>
            </div>
        </li>
    )
}

export default Nav