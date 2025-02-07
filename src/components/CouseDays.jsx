import React from "react";
import { motion } from "framer-motion";

const CourseDays = ({ title, duration, schedule }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center my-10 w-full max-w-6xl"
        >
            {/* Content */}
            <div className="relative text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true }}
                    className="text-3xl font-bold text-orange-500 mb-6">{title}</motion.h1>
                <p className="text-lg text-gray-700 mb-8">Duration: {duration}</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {schedule.map((dayData, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-md rounded-lg p-5 border-l-4 border-orange-500 relative"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1828/1828765.png"
                                    alt="Icon"
                                    className="w-8 h-8 opacity-20"
                                />
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Day {dayData.day}</h2>
                            {dayData.topics && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="list-disc ml-5 text-gray-700"
                                >
                                    {dayData.topics.map((topic, idx) => (
                                        <li key={idx}>{topic}</li>
                                    ))}
                                </motion.ul>
                            )}
                            {dayData.assignment && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}

                                    className="mt-3 text-blue-600 font-semibold"
                                >
                                    Assignment: {dayData.assignment}
                                </motion.p>
                            )}
                            {dayData.capstoneProject && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="mt-3"
                                >
                                    <p className="text-green-600 font-semibold">
                                        Capstone Project ({dayData.capstoneProject.phase}):
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-700">
                                        {dayData.capstoneProject.tasks.map((task, idx) => (
                                            <li key={idx}>{task}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                            {dayData.portfolio && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="mt-3"
                                >
                                    <p className="text-purple-600 font-semibold">Portfolio Tasks:</p>
                                    <ul className="list-disc ml-5 text-gray-700">
                                        {dayData.portfolio.tasks.map((task, idx) => (
                                            <li key={idx}>{task}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CourseDays;
