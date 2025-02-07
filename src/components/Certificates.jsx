import React from "react";
import { motion } from "framer-motion";

const certificateData = {
    title: "Your UI/UX Design Certificate Awaits",
    subtitle: "UI/UX DESIGN BOOTCAMP CERTIFICATION",
    description:
        "Get a GrowthSchool certificate upon successful completion of the program.",
    image:
        "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg",
};

const Certificates = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-20 md:py-0 lg:min-h-screen bg-gray-50 px-6"
        >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">

                {/* Certificate Image Animation */}
                <motion.img
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    src={certificateData.image}
                    alt="Certificate preview"
                    className="h-auto rounded-lg w-[15rem] md:w-[35rem] shadow-lg"
                />

                {/* Certificate Details with Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-gray-800">
                        {certificateData.title.split(" Certificate")[0]}{" "}
                        <span className="text-orange-500">Certificate</span>
                        {certificateData.title.split(" Certificate")[1]}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        className="text-green-500 text-lg md:text-xl mt-2">
                        {certificateData.subtitle}
                    </motion.p>
                    <motion.p 
                     initial={{ opacity: 0, y: 60 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    className="text-gray-600 text-base md:text-lg mt-4">
                        {certificateData.description}
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Certificates;
