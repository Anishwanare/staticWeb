import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What is the duration of the Bootcamp?",
        answer: "The Bootcamp lasts for 2 to 7 months depending on the plan you choose.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer: "Yes! You’ll receive a certification from our institute upon successful completion.",
    },
    {
        question: "Are there any prerequisites?",
        answer: "No prior experience is required. The courses cater to beginners as well.",
    },
    {
        question: "Will I get job assistance?",
        answer: "Yes! Some plans offer placement assistance to help you land a job.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto p-6 my-10 bg-gray-50"
        >
            <h1 className="text-4xl font-bold mb-8 text-center">
                Frequently <span className="text-blue-600">Asked</span>{" "}
                <span className="text-orange-500">Questions</span>
            </h1>

            <div className="space-y-4 max-w-6xl mx-auto">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg p-5 shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xl font-bold text-blue-600"
                            >
                                {openIndex === index ? "−" : "+"}
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="mt-2 text-gray-700"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FAQ;
