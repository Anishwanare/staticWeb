import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";

const testimonials = [
    { name: "Hitesh R", role: "UX Designer", image: "https://storage.googleapis.com/a1aa/image/_Ih3eOAv5Z4WXcs5OuhuWzyAJYRgYJicTNJyr-mC9yo.jpg", title: "Expertise Mentors supportive team", review: "Teaching staff is excellent. Method of teaching is too good. If there is any institute in Pune for UI/UX design course, then it is only UI/UX Design Box.", rating: 5 },
    { name: "Usha K", role: "UX Designer", image: "https://storage.googleapis.com/a1aa/image/lN-gWM-fITP1SMeqkTsKfpq5ujq9IsA7aGU46oo0zuc.jpg", title: "Project-based Real-time Projects", review: "Teaching staff is excellent. Method of teaching is too good.", rating: 5 },
    { name: "Rajesh", role: "UX Designer", image: "https://storage.googleapis.com/a1aa/image/KIU3SZSKimbydIj-ExA9sQNHnJgP8QRrgmuwqWkM4jE.jpg", title: "Excellent Learning Experience", review: "UI/UX Design Box is the best place to learn UX/UI design.", rating: 5 },
    { name: "Priya M", role: "UI Designer", image: "https://randomuser.me/api/portraits/women/44.jpg", title: "Amazing UI/UX Course", review: "I learned a lot from this course. The practical projects helped me build confidence in UI/UX design.", rating: 5 },
    { name: "Arun S", role: "Product Designer", image: "https://randomuser.me/api/portraits/men/45.jpg", title: "Great Mentors & Support", review: "The mentorship and real-world projects provided a solid foundation for my career in design.", rating: 5 }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

    // Adjust items per slide based on screen width
    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} viewport={{ once: true }} className="bg-white text-gray-800 py-12 px-4 container mx-auto">
            {/* Heading */}
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}
                viewport={{ once: true }} className="text-4xl font-bold text-center mb-2">
                Hear Testimonials from Our <span className="text-orange-500">Inspiring Alumni</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: -40 }}
                viewport={{ once: true }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-center text-green-600 mb-8">
                UI/UX DESIGN BOOTCAMP REVIEWS
            </motion.p>

            {/* Testimonials Carousel */}
            <div className="relative w-full flex justify-center overflow-hidden">
                <div className="w-full max-w-5xl overflow-hidden">
                    <motion.div className="flex transition-transform duration-700 ease-in-out"
                        viewport={{ once: true }} animate={{ x: `-${currentIndex * 100}%` }}>
                        {Array(totalSlides).fill().map((_, slideIndex) => (
                            <div key={slideIndex} className="flex min-w-full justify-center gap-6">
                                {testimonials.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((testimonial, index) => (
                                    <motion.div 
                                    viewport={{ once: true }} key={index} whileHover={{ scale: 1.05 }} className="bg-white border rounded-lg shadow-lg p-6 text-center w-[90%] sm:w-[30%] transition-all duration-300">
                                        <div className="flex flex-col items-center">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                            <p className="text-gray-600">{testimonial.role}</p>
                                        </div>
                                        <h4 className="text-lg font-bold my-2">{testimonial.title}</h4>
                                        <p className="text-gray-700 mb-4">{testimonial.review}</p>
                                        <div className="flex justify-center text-yellow-500 mb-2">
                                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                                <FaStar key={starIndex} className="text-3xl" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 flex items-center justify-center">
                                            Google Post <FaGoogle className="text-blue-500 ml-2" />
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;
