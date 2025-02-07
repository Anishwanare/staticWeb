import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <div className="max-w-6xl mx-auto p-6 my-5">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Frequently <span className="text-blue-600">Asked</span>{" "}
                <span className="text-orange-500">Questions</span>
            </h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-4 shadow-md cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                +
                            </motion.div>
                        </div>
                        {openIndex === index && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 text-gray-700"
                            >
                                {faq.answer}
                            </motion.p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
