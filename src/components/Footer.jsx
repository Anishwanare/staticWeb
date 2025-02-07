import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaSnapchatGhost, FaRedditAlien, FaTelegramPlane, FaPinterestP, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Logo and About Section */}
                    <div className="md:w-1/3">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/1tSy7YGass6G9M4OvkwmlVQ4KDi7cOY9FD4nn1FQsQw.jpg"
                            alt="MyCaptain Logo"
                            className="mb-4 w-40"
                        />
                        <p className="text-gray-400 mb-4">
                            MyCaptain provides beginner to advanced live & online cohort-based
                            courses in Business, Content, Design, and Product. We help early
                            professionals, young graduates, and college students acquire
                            skills and get jobs in new-age careers.
                        </p>

                        {/* Social Media Links (Kept in Original Position) */}
                        <div className="absolute md:bottom-20 md:right-10">
                            <p className="text-gray-400 mb-4 font-bold hover:underline cursor-pointer hidden md:block">Social Links</p>
                            <div className="flex space-x-2 md:space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl"><FaFacebookF /></a>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300 text-xl"><FaYoutube /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300 text-xl"><FaLinkedinIn /></a>
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300 text-xl"><FaInstagram /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300 text-xl"><FaWhatsapp /></a>
                                <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300 text-xl"><FaSnapchatGhost /></a>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300 text-xl"><FaRedditAlien /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"><FaTelegramPlane /></a>
                                <a href="#" className="text-gray-400 hover:text-red-600 transition duration-300 text-xl"><FaPinterestP /></a>
                                <a href="#" className="text-gray-400 hover:text-indigo-500 transition duration-300 text-xl"><FaDiscord /></a>
                            </div>
                        </div>

                        {/* App Store Links */}
                        <div className="flex space-x-4 mt-12">
                            <a href="#">
                                <img
                                    src="https://e7.pngegg.com/pngimages/530/733/png-clipart-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-thumbnail.png"
                                    alt="Google Play"
                                    className="w-9 rounded-xl"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://w7.pngwing.com/pngs/566/36/png-transparent-app-store-iphone-apple-app-store-icon-blue-text-mobile-phones-thumbnail.png"
                                    alt="App Store"
                                    className="w-9 rounded-xl"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:w-2/3">
                        <div>
                            <h3 className="font-semibold mb-4">Pro Courses</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Digital Marketing</li>
                                <li>UI/UX Design</li>
                                <li>Content & Copywriting</li>
                                <li>Business Analytics</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Technology</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Web Development</li>
                                <li>Artificial Intelligence</li>
                                <li>Python Programming</li>
                                <li>Full Stack Development</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Business</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Entrepreneurship</li>
                                <li>Branding & Advertising</li>
                                <li>Stock Market & Finance</li>
                                <li>Business Analytics</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Creatives</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Social Media Content</li>
                                <li>Creative Writing</li>
                                <li>Photography</li>
                                <li>Graphic Design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
                    <p>Copyright © {new Date().getFullYear()} The Climber Knowledge. All Rights Reserved</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Who are we?</a>
                        <a href="#" className="hover:text-white">Blogs</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <a href="#" className="hover:text-white">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
