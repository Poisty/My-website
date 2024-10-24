import { useState } from 'react';

export const HamburgerBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="md:hidden block">
            {/* Hamburger Icon */}
            <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="mt-2 space-y-2">
                    <a href="#home" className="block px-4 py-2 text-black hover:bg-gray-200">
                        Home
                    </a>
                    <a href="#about" className="block px-4 py-2 text-black hover:bg-gray-200">
                        About
                    </a>
                    <a href="#contact" className="block px-4 py-2 text-black hover:bg-gray-200">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};
