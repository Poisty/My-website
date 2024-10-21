import { Link } from 'react-router-dom';
import Nav from "./Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {
    return (
        <header className="flex px-4 sm:px-6 lg:px-8 xl:px-12 justify-end py-2 gap-4 bg-[#323035]">
            {/* GitHub Logo */}

            <a
                href="https://github.com/Poisty/Delte_filer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center" // Smaller clickable area
            >
                <FaGithub className="w-full h-full" />
            </a>

            {/* LinkedIn Logo */}
            <a
                href="https://www.linkedin.com/in/fredrik-villo-034453a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 overflow-hidden flex items-center justify-center"  // Smaller clickable area
            >
                <FaLinkedin className="w-full h-full" />
            </a>

        </header>
    );
}

export default Header;
