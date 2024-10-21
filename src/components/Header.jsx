import { Link } from 'react-router-dom';
import Nav from "./Nav";

function Header() {
    return (
        <header className="relative flex justify-between bg-black">
            <div className="flex items-center space-x-2 ml-auto"> {/* Push logos to the right */}
                
                {/* GitHub Logo */}
                <a
                    href="https://github.com/Poisty/Delte_filer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center" // Smaller clickable area
                >
                    <img
                        className="w-20 h-20 object-cover"  // Keep image large
                        src="/github_color.png"
                        alt="GitHub"
                    />
                </a>

                {/* LinkedIn Logo */}
                <a
                    href="https://www.linkedin.com/in/fredrik-villo-034453a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"  // Smaller clickable area
                >
                    <img
                        className="w-16 h-16 object-cover"  // Keep image large
                        src="/linkedin.png"
                        alt="LinkedIn"
                    />
                </a>

            </div>
        </header>
    );
}

export default Header;
