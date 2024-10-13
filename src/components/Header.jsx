import { BackgroundImage } from "./bgImage"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="relative">
            <Link to="/" className="z-10 p-4">
                <video src="/P.mp4" autoPlay muted loop className="w-[100px] rounded-full" />
            </Link>

            <BackgroundImage className="" />
        </header>
    )
}

export default Header