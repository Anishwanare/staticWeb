import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 * index, duration: 0.6, ease: "easeOut" },
    }),
};

const Achievement = () => {
    const achievements = [
        { value: "₹8LPA+", text: "Avg. pay package", color: "bg-blue-500" },
        { value: "44%", text: "Average pay hike", color: "bg-green-500" },
        { value: "2700+", text: "Tech transitions", color: "bg-yellow-500" },
        { value: "4.77/5.00", text: "Stars, Across 1600+ Reviews", color: "bg-red-500" },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-center bg-white my-10 py-14 px-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        custom={index}
                        whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                        className={`${item.color} text-white rounded-tr-3xl rounded-bl-3xl px-10 py-6 text-center shadow-lg transform transition-all duration-300`}
                    >
                        <div className="text-4xl font-bold">{item.value}</div>
                        <div className="text-sm mt-2 opacity-90">{item.text}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Achievement;
