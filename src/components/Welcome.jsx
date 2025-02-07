import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            viewport={{ once: true }}
            className="flex items-center justify-center w-full bg-gray-50"
        >
            <div className="p-8 rounded-lg m-auto max-w-7xl flex flex-col md:flex-row items-center justify-center my-14">

                {/* Image Section with Animation */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }} 
                    viewport={{ once: true }} 
                    className="md:w-1/3"
                >
                    <img
                        alt="Group of students in a classroom setting, discussing and smiling"
                        className="rounded-lg w-full h-auto shadow-lg"
                        src="https://storage.googleapis.com/a1aa/image/2UFbvvS06PDQDhpZZGVyLo251r7Ez5NbCCJrUfszZ7o.jpg"
                        loading="lazy"
                    />
                </motion.div>

                {/* Text Content Section with Animation */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }} 
                    viewport={{ once: true }} 
                    className="md:w-1/2 md:pl-14 mt-6 md:mt-0"
                >
                    <h1 className="text-2xl font-bold text-gray-800">
                        WELCOME <span className="text-orange-500">UI UX Design Box</span>
                    </h1>
                    <h2 className="text-3xl font-bold text-gray-800 mt-4">
                        UI UX Design Course in Pune
                    </h2>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        UI/UX Design Box is a Design Institute with both offline and online classes in Pune. 
                        Our <span className="font-bold">Best UI/UX Design Course in FC Pune</span> is a gateway 
                        to a very promising future in UI/UX Design. This institute was established in 2015 
                        with the help of industry experts. We focus on empowering students with skills and 
                        knowledge required to excel in this ever-evolving design industry.
                    </p>

                    {/* Call-to-Action Button with Hover Animation */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold border border-blue-500 rounded-lg shadow-lg 
                                   transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                    >
                        Admission Now
                    </motion.button>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Welcome;
