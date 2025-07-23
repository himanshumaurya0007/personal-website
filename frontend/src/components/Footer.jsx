import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "About Me", to: "/about-me" },
    // { label: "Contact Me", to: "/contact-me" },
];

function Footer() {
    return (
        <footer className="bg-text-primary text-white py-10 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Quick Links */}
                    <section>
                        <h3 className="text-accent-primary text-xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className="hover:text-accent-primary transition-colors"
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Contact */}
                    <section>
                        <h3 className="text-accent-primary text-xl font-semibold mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:himanshumaurya7781@gmail.com"
                                    className="inline-flex items-center gap-2 hover:text-accent-primary transition-colors"
                                    aria-label="Email Himanshu"
                                >
                                    <FaEnvelope /> himanshumaurya7781@gmail.com
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Social Media */}
                    <section>
                        <h3 className="text-accent-primary text-xl font-semibold mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://linkedin.com/in/himanshumaurya0007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-accent-primary transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/himanshumaurya0007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-accent-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/himanshumaurya0007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-accent-primary transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-4 text-center text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} | Himanshu Maurya | All rights reserved.</p>
                    <p className="mt-1">
                        Designed & Built by <span className="font-semibold text-accent-primary">Himanshu Maurya</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
