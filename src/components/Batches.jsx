import React from "react";
import { motion } from "framer-motion";

const batches = [
    {
        title: "UI Design with Figma",
        schedule: "5 days a week",
        startDate: "25th November 2024",
    },
    {
        title: "Foundations and Intermediate UX Design",
        schedule: "5 days a week",
        startDate: "30th November 2024",
    },
    {
        title: "UI/UX Design Course",
        schedule: "5 days a week",
        startDate: "5th December 2024",
    },
    {
        title: "Foundations and Intermediate UX Design",
        schedule: "5 days a week",
        startDate: "30th November 2024",
    },
    {
        title: "UI/UX Design Course",
        schedule: "5 days a week",
        startDate: "5th December 2024",
    },
    {
        title: "Foundations and Intermediate UX Design",
        schedule: "5 days a week",
        startDate: "30th November 2024",
    },
    {
        title: "UI/UX Design Course",
        schedule: "5 days a week",
        startDate: "5th December 2024",
    },
];

const Batches = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="container mx-auto px-4 py-12 bg-gray-50">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
                className="text-4xl font-bold text-center text-orange-600 mb-2 animate-fade-in ">
                Upcoming Batches
            </motion.h1>
            <p
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-green-600 mb-8 animate-fade-in delay-100 md:my-6">
                Stay updated on our upcoming batches. Explore the batch schedule below
                to learn about our latest courses, workshops, and training programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl m-auto">
                {batches.map((batch, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-xl font-bold mb-2">{batch.title}</h2>
                        <p className="text-gray-600 mb-4">{batch.schedule}</p>
                        <p className="text-green-600 mb-2">Starts on {batch.startDate}</p>
                        <p className="text-gray-800 mb-4">BOOK YOUR SEAT NOW!!</p>
                        <button className="bg-green-200 text-green-800 font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-green-300 hover:shadow-md">
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Batches;
