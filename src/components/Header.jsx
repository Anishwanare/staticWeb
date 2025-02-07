import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGift, FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMobileMenuOpen ? "block" : "hidden"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            <nav className="flex items-center justify-between p-4 shadow-md sticky top-0 w-full z-50 bg-white">
                <div className="flex items-center">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/nQ95roWW1Tao7we7Nc4PKaxDWhxyKUA-62qCzwNGSl4.jpg"
                        alt="MyCaptain logo"
                        className="h-8 w-8"
                    />
                    <span className="ml-2 text-2xl font-bold text-gray-800">LOGO</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative group">
                        <button className="text-gray-800 font-medium flex items-center">
                            Pro courses <FaChevronDown className="ml-1" />
                        </button>
                    </div>
                    <div className="relative group">
                        <button className="text-gray-800 font-medium flex items-center">
                            Kickstarter courses <FaChevronDown className="ml-1" />
                        </button>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaGift className="text-yellow-500" />
                        <button className="text-gray-800 font-medium">Refer & Earn</button>
                        <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
                            New
                        </span>
                    </div>
                    <button className="text-gray-800 font-medium">Reviews</button>
                    <div className="relative group">
                        <button className="text-gray-800 font-medium flex items-center">
                            Company <FaChevronDown className="ml-1" />
                        </button>
                    </div>
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
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FaTimes size={24} />
                    </button>
                    <div className="flex flex-col items-start mt-12 space-y-4 px-6">
                        <button className="text-gray-800 font-medium">Pro courses</button>
                        <button className="text-gray-800 font-medium">Kickstarter courses</button>
                        <button className="text-gray-800 font-medium flex items-center">
                            <FaGift className="text-yellow-500 mr-2" /> Refer & Earn
                            <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                                New
                            </span>
                        </button>
                        <button className="text-gray-800 font-medium">Reviews</button>
                        <button className="text-gray-800 font-medium">Company</button>
                        <p className="text-orange-500 font-medium border border-orange-500 px-4 py-2 rounded w-full hover:bg-orange-500">
                            Login
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
