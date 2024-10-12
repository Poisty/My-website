function Nav() {
    return (
        <nav>
        <ul>
            <li class="dropdown">
                <a href="#">Courses</a>
                <div class="dropdown-content">
                    <a href="#">Programming</a>
                    <a href="#">Data Structures</a>
                    <a href="#">Algorithms</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="#">Projects</a>
                <div class="dropdown-content">
                    <a href="#">Web Development</a>
                    <a href="#">Networking</a>
                    <a href="#">Maths</a>
                </div>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    )
}

export function NavItem() {
    return (
        <li class="dropdown">
        <a href="#">Courses</a>
        <div class="dropdown-content">
            <a href="#">Programming</a>
            <a href="#">Data Structures</a>
            <a href="#">Algorithms</a>
        </div>
    </li>  
    )
}

export default Nav