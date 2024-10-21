import { Link } from 'react-router-dom';
import Nav from "./Nav";

function Header() {
    return (
        <header className="relative flex justify-between bg-[#323035] h-[100px] items-center">
            <div className="flex items-center space-x-2"> {/* Flex container for logos */}
                <Link to="/" className="z-10 p-4">
                    <img
                        className="w-auto max-h-[130px] h-auto"
                        src="/poistLabs2.png"
                        alt="Project 4"
                    />
                </Link>

                {/* GitHub Logo */}
                <a href="https://github.com/Poisty/Delte_filer" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-20 h-20 object-contain mt-8 mr-0"
                        src="/github.png"
                        alt="GitHub"
                    />
                </a>

                {/* LinkedIn Logo */}
                <a href="https://www.linkedin.com/in/fredrik-villo-034453a0/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-16 h-16 object-contain mt-8"
                        src="/linkedin.png"
                        alt="LinkedIn"
                    />
                </a>
            </div>
            <Nav />
        </header>
    );
}

export default Header;
