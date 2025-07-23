import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "About Me", to: "/about-me" },
    // { label: "Contact Me", to: "/contact-me" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

                {/* Responsive Logo */}
                <NavLink
                    to="/"
                    className="text-3xl font-bold text-accent-primary hover:text-accent-secondary transition-colors duration-300"
                    onClick={closeMenu}
                >
                    {/* Displayed on <= 425px */}
                    <span className="block sm:hidden">HM</span>

                    {/* Displayed above 425px */}
                    <span className="hidden sm:block">Himanshu Maurya</span>
                </NavLink>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-2xl text-accent-primary focus:outline-none"
                    aria-label="Toggle navigation menu"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `text-lg font-medium transition-colors duration-200 ${isActive
                                    ? "text-accent-primary underline underline-offset-4"
                                    : "text-text-primary hover:text-accent-primary"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-40 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col space-y-4 px-6 py-4">
                    {navLinks.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block text-lg font-medium transition-colors duration-200 ${isActive
                                    ? "text-accent-primary underline underline-offset-4"
                                    : "text-text-primary hover:text-accent-primary"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
