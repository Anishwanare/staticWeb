import React from "react";
import { motion } from "framer-motion";

const Programs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-gray-50 flex justify-center items-center lg:min-h-screen px-4 py-10"
        >
            <div className="max-w-5xl w-full">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    
            viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-orange-600 mb-8"
                >
                    Career Track Program
                </motion.h1>

                {/* Program Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300"
                >
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <img
                            src="https://storage.googleapis.com/a1aa/image/e8dXh_swUxTIsV04njhqNho1_qK3CwIfMKodgLzdvbw.jpg"
                            alt="Person brainstorming UX design ideas"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 bg-gradient-to-r from-yellow-500 to-orange-400 p-8 flex flex-col justify-center"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-3"
                        >
                            🎨 UX ACADEMY
                        </motion.h2>

                        {/* Cohort Date */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white text-gray-700 font-semibold px-4 py-2 rounded-full w-max text-sm mb-4 shadow-md"
                        >
                            📅 NEXT COHORT:{" "}
                            <span className="text-orange-600 font-bold">JUNE 25, 2024</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-white leading-relaxed mb-6"
                        >
                            For close to a decade, UX Academy has been the proven way to launch a career in digital design.
                            Most students start by taking UX Academy Foundations to build their UI skills before moving on
                            to complete UX Academy.
                        </motion.p>

                        {/* Learn More Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Learn More →
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Programs;
