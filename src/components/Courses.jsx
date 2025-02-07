import React from "react";
import { motion } from "framer-motion";

const courses = [
    {
        title: "UI Figma Design Course",
        description:
            "Master Figma, the go-to tool for UI design. Learn to create wireframes, interactive prototypes, and collaborate on real-world projects.",
        image: "https://storage.googleapis.com/a1aa/image/3bztaico4rHJnq1J3_GKgquInsgmCM1yzmUBPcmCnRg.jpg",
    },
    {
        title: "The UX Design Foundation",
        description:
            "The UX Design Foundation course introduces key concepts like user research, wireframing, prototyping, and usability testing.",
        image: "https://storage.googleapis.com/a1aa/image/tNMO7O3adXhL0lkkpyGBzP8TuMXS4RFQhVhUymWLtIg.jpg",
    },
    {
        title: "UI/UX Design Foundation",
        description:
            "The Diploma in UI/UX Design course provides in-depth training on creating user-friendly and visually appealing digital interfaces.",
        image: "https://storage.googleapis.com/a1aa/image/fov0yHnszLMCZxzAYaDLvbpoR4vIEQZNQC7nTx6IT2A.jpg",
    },
    {
        title: "The UI/UX Design with AI Diploma",
        description:
            "The UI/UX Bootcamp provides an intensive, hands-on learning experience for aspiring designers, covering real-world design projects.",
        image: "https://storage.googleapis.com/a1aa/image/2tEWtIOG6Mc-wrtjR3G5BOKxi_4WuQa_JncKtEzMFCc.jpg",
    },
];

const Courses = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white text-gray-900 font-roboto py-16 px-6 max-w-6xl m-auto"
        >
            {/* Title Section with Motion */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 90 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold">
                    Our <span className="text-orange-500">Courses</span>
                </motion.h1>
                <p className="text-green-500 text-lg mt-2">Enhance Your UI/UX Skills</p>
            </motion.div>

            {/* Courses Grid with Animated Cards */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="p-6 text-center">
                            {/* Image */}
                            <img
                                src={course.image}
                                alt={course.title}
                                className="mb-4 h-20 w-20 mx-auto rounded-lg object-cover"
                            />
                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                            {/* Description */}
                            <p className="text-gray-700 text-sm">{course.description}</p>
                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 px-6 py-2 bg-black text-white rounded-full transition-all hover:bg-orange-500"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Courses;
