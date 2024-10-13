function Nav() {
    return (
        <nav>
        <ul>
            <li className="dropdown">
                <a href="#">Courses</a>
                <div className="dropdown-content">
                    <a href="#">Programming</a>
                    <a href="#">Network and security</a>
                    <a href="#">Algorithms and datastructures</a>
                </div>
            </li>
            <li className="dropdown">
                <a href="#">Projects</a>
                <div className="dropdown-content">
                    <a href="#">Web Development</a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </li>
            <li>
                <a href="https://www.poist.no/about">About</a>
            <div>
                 
                </div>
            </li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    )
}

export function NavItem() {
    return (
        <li className="dropdown">
        <a href="#">Courses</a>
        <div className="dropdown-content">
            <a href="#">Programming</a>
            <a href="#">Data Structures</a>
            <a href="#">Algorithms</a>
        </div>
    </li>  
    )
}

export default Nav