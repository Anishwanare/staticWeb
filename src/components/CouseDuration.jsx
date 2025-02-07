import React from "react";
import { motion } from "framer-motion";

const CourseDuration = ({ imgSrc, title, details, buttonText }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl p-8 rounded-lg"
        >
            {/* Animated Background Vector */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-40 h-40 bg-orange-100 rounded-full -z-10"
            ></motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full -z-10"
            ></motion.div>

            {/* Left: Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <motion.img
                    src={imgSrc}
                    alt={title}
                    className="w-3/4 md:w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                />
            </motion.div>

            {/* Right: Course Details */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
            >
                <div className="bg-white p-8 rounded-xl shadow-md w-full border border-gray-200">
                    <motion.h2 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true }}
                    className="text-2xl font-bold text-orange-500 mb-4 text-center">{title}</motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                        className="space-y-4"
                    >
                        {details.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="flex justify-between py-3 px-4 bg-gray-100 rounded-lg"
                            >
                                <span className="font-semibold text-gray-700">{item.label}</span>
                                <span className="text-gray-600">{item.value}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Buy Now Button */}
                    <motion.div className="mt-6 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600"
                        >
                            🚀 {buttonText}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CourseDuration;
