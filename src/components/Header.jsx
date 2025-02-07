import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Overlay when mobile menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <nav className="flex items-center justify-between p-4 shadow-md sticky top-0 w-full z-50 bg-white">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="https://primepointinstitute.com/wp-content/uploads/2025/01/cropped-Prime-Point-Logo.png"
                        alt="Prime Point Institute"
                        className="h-8 w-auto cursor-pointer"
                        title="Prime Point Institute"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/full-stack-course" className="text-gray-800 font-medium">
                        Full Stack Course
                    </Link>
                    <Link to="/ui-ux-course" className="text-gray-800 font-medium">
                        UI-UX Course
                    </Link>
                    <button className="text-gray-800 font-medium">Reviews</button>
                    <button className="text-gray-800 font-medium">Company</button>
                    <button className="text-orange-500 font-medium border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FaTimes size={24} />
                    </button>
                    <div className="flex flex-col items-start mt-12 space-y-4 px-6">
                        <Link to="/full-stack-course" className="text-gray-800 font-medium">
                            Full Stack Course
                        </Link>
                        <Link to="/ui-ux-course" className="text-gray-800 font-medium">
                            UI-UX Course
                        </Link>
                        <button className="text-gray-800 font-medium">Reviews</button>
                        <button className="text-gray-800 font-medium">Company</button>
                        <button className="text-orange-500 font-medium border border-orange-500 px-4 py-2 rounded w-full hover:bg-orange-500 hover:text-white">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
