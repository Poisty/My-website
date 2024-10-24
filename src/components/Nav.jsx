import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HamburgerBar } from './HamburgerBar'; // Ensure correct path for import

function Nav() {
    const [url, setUrl] = useState("");
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu toggle
    const location = useLocation();
    const currentUrl = location.pathname;

    useEffect(() => {
        setUrl(currentUrl);
    }, [currentUrl]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the mobile menu
    };

    return (
        <nav className="bg-[#323035] px-4 sm:px-6 lg:px-8 xl:px-12 py-2 relative z-20">
            <div className="flex items-center justify-between h-12">
                {/* Logo */}
                <Link to="/" className="z-10 flex-shrink-0">
                    <img
                        className="h-16 w-auto transition-transform duration-300 hover:scale-[103.5%]" // Adjusted logo size and position
                        src="/poistlogo.png"
                        alt="poist labs logo"
                    />
                </Link>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>

                {/* Desktop Navigation (hidden on mobile) */}
                <ul className="hidden md:flex items-center space-x-4">
                    {url !== "/" && (
                        <li>
                            <NavItem to="/" text="Hjem" />
                        </li>
                    )}
                    <li className="dropdown relative z-30">
                        <Link to="#">Studie-emner</Link>
                        <div className="dropdown-content absolute z-40 hidden group-hover:block">
                            <Link to="/programming">Programmering</Link>
                            <Link to="/network&security">Nettverk og sikkerhet</Link>
                            <Link to="/algoritmer">Algoritmer og datastrukturer</Link>
                        </div>
                    </li>
                    <NavItem to="#" text="Portefølje" />
                    <NavItem to="about" text="Om" />
                    <NavItem to="#" text="Kontakt" />
                </ul>
            </div>

            {/* Mobile Navigation Menu (visible when toggled) */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-end mt-4 space-y-2 pr-4"> {/* Aligned right */}
                    {url !== "/" && (
                        <li>
                            <NavItem to="/" text="Hjem" />
                        </li>
                    )}
                    <li>
                        <Link to="/programming" className="block px-2 py-1">Programmering</Link>
                    </li>
                    <li>
                        <Link to="/network&security" className="block px-2 py-1">Nettverk og sikkerhet</Link>
                    </li>
                    <li>
                        <Link to="/algoritmer" className="block px-2 py-1">Algoritmer og datastrukturer</Link>
                    </li>
                    <NavItem to="#" text="Portefølje" />
                    <NavItem to="about" text="Om" />
                    <NavItem to="#" text="Kontakt" />
                </ul>
            )}
        </nav>
    );
}

export function NavItem({ to, text }) {
    return (
        <li className="group relative transition-transform duration-[100ms] hover:scale-110">
            <Link
                className="block px-2 py-1 rounded-md transition-colors duration-300"
                to={to}
            >
                {text}
            </Link>
            {/* Hover effect only for underline */}
            <div className="h-0 group-hover:h-[4px] bg-[#982dff] absolute w-full bottom-0 transition-all duration-300" />
        </li>
    );
}

export default Nav;
