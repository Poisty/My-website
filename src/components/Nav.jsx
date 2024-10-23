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
        <nav className="bg-[#323035] px-4 sm:px-6 lg:px-8 xl:px-12 py-2 relative z-20">
            <div className="flex items-center relative justify-end h-12">
                <Link
                    to="/"
                    className="z-10 left-0 -translate-y-1/3 absolute"
                >
                    <img
                        className="h-24 w-auto transition-transform duration-300 hover:scale-110" // Size increase on hover
                        src="/poistlogo.png"
                        alt="poist labs logo"
                    />
                </Link>
                <ul className="flex items-center space-x-4">
                    {url !== "/" && (
                        <li>
                            <NavItem to="/" text="Hjem" />
                        </li>
                    )}
                    <li className="dropdown relative z-30">
                        <Link className="" to="#">Studie-emner</Link>
                        <div className="dropdown-content absolute z-40">
                            <Link to="/programming">Programmering</Link>
                            <Link to="/network&security">Nettverk og sikkerhet</Link>
                            <Link to="/algoritmer">Algoritmer og datastrukturer</Link>
                        </div>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-110">
                    <NavItem to="#" text="Portefølje"/>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-110">
                    <NavItem to="about" text="Om"/>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-110">
                    <NavItem to="#" text="Kontakt"/>
                    </li>
                   
                    
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
