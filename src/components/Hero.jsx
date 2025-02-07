import React, { useEffect, useState } from "react";

const Hero = () => {
    const jobData = [
        "Job Assistance...",
        "Full Stack Cloud...",
        "Software Development...",
        "Data Science...",
        "UX/UI Designer...",
        "Frontend Developer...",
        "Backend Developer...",
        "Mobile Developer...",
        "Cybersecurity...",
        "Blockchain Engineering...",
        "DevOps Engineering...",
        "Product Management...",
        "UI/UX Design...",
        "Digital Marketing...",
        "SaaS FAS..."
    ];

    const [currentJob, setCurrentJob] = useState(jobData[0]);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % jobData.length;
            setCurrentJob(jobData[index]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-800 py-16 px-6 container mx-auto text-center">
            {/* Hero Text */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Career with
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 my-3 transition-all duration-500">
                {currentJob}
            </h2>
            <p className="text-lg mt-3">
                <b>3,80,000+</b> learners already have! When will you?
            </p>

            {/* CTA Button */}
            <div className="mt-6">
                <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                    Find the right program for you
                </button>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-24 h-24 rounded-full border-4 border-orange-500"
                            />
                            <h3 className="text-xl font-semibold mt-4">{profile.name}</h3>
                            <p className="text-gray-500 text-sm">{profile.company}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="text-sm">
                                <p className="text-gray-500">Pre MyCaptain</p>
                                <p className="font-semibold">{profile.preRole}</p>
                            </div>
                            <div className="text-orange-500 text-2xl">
                                ➜
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-500">Post MyCaptain</p>
                                <p className="font-semibold">{profile.postRole}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const profiles = [
    {
        name: "Swapnashree K K",
        company: "AKARTHA",
        image: "https://storage.googleapis.com/a1aa/image/C9JuCs3DAxJmNBygDEvUyob2pz_tCLN4nlbak4bQwLM.jpg",
        preRole: "Sales Executive",
        postRole: "Social Media Manager",
    },
    {
        name: "Divya Gajbhiye",
        company: "EATFIT",
        image: "https://storage.googleapis.com/a1aa/image/HmKGbGTnZufYwxweQQecgR6LDSXDgzeNppPIJ3onB4Q.jpg",
        preRole: "BA Graduate",
        postRole: "Social Media Intern",
    },
    {
        name: "Sagar Khale",
        company: "ROXILER SYSTEMS",
        image: "https://storage.googleapis.com/a1aa/image/jkvzDPIM4ZFvliW9kXVhiBh9z9UDWnDw2u3TUyyRxCk.jpg",
        preRole: "Design Engineer Operation II",
        postRole: "UI/UX Designer",
    },
    {
        name: "Riya Prakash",
        company: "Analytics Square",
        image: "https://storage.googleapis.com/a1aa/image/riDRbyImiaecNoDmEvaIbbOQc0ttxMd1nrUgDEWJjP4.jpg",
        preRole: "Chemical Engineer",
        postRole: "Sr Content Writer",
    },
];

export default Hero;
