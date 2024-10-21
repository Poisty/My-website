import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Nav() {
    const [url, setUrl] = useState("");
    const location = useLocation();
    const currentUrl = location.pathname;

    useEffect(() => {
        setUrl(currentUrl);
    }, [currentUrl]);

    return (
        <nav className="bg-[#323035] px-4 py-2">
            <div className="flex items-center justify-between h-12">
                <Link to="/" className="z-10">
                    <img
                        className="max-h-[200px] h-full w-auto"
                        src="/poistLabs2.png"
                        alt="Project 4"
                    />
                </Link>
                <ul className="flex items-center space-x-4">
                    {url !== "/" && (
                        <li>
                            <NavItem to="/" text="Home" />
                        </li>
                    )}
                    <li className="dropdown">
                        <Link className="" to="#">Courses</Link>
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
                        </div>
                    </li>
                    <NavItem to="about" text="About" />
                    <NavItem to="#" text="Contact" />
                </ul>
            </div>
        </nav>
    );
}

export function NavItem({ to, text }) {
    return (
        <li className="group relative">
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