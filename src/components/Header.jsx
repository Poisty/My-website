import { BackgroundImage } from "./bgImage"
import { Link } from 'react-router-dom'
import Nav from "./Nav"

function Header() {
    return (
        <header className="relative flex justify-between bg-[#323035]">
            <Link to="/" className="z-10 p-4">
                <video src="/P.mp4" autoPlay muted loop className="w-[100px] rounded-full" />
            </Link>
            <Nav/>
            {/* <BackgroundImage className="" /> */}
        </header>
    )
}

export default Header

