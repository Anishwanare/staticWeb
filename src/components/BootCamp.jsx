import React from "react";

const bootcampPlans = [
    {
        title: "Beginner to Intermediate",
        planName: "UI Figma Design Course",
        duration: "2.5 months",
        certification: "Institute",
        features: [
            "Comprehensive Learning Path",
            "Hands-on Assignments",
            "Prototyping and Interaction Design",
            "Building a Design System",
            "Real-World Capstone Project",
            "Portfolio Building",
        ],
        image: "https://storage.googleapis.com/a1aa/image/7CmH_rPUYW-6k9N1WM4Eu5Y2fjtRu2F00qQmtXd3CJY.jpg",
        color: "bg-gray-800",
    },
    {
        title: "Beginner to Advance",
        planName: "The UX Design Foundation",
        duration: "2 months",
        certification: "Institute",
        features: [
            "Comprehensive UX Foundations",
            "Basics of HTML & CSS",
            "UX Writing & Accessibility",
            "Mobile & Web UX Design",
            "Internship",
            "Basics of Photoshop",
        ],
        image: "https://storage.googleapis.com/a1aa/image/LK7ZOrO6vTbPbIWNIaR1-GUyr7A3vO4BnwAKaNjrL7g.jpg",
        color: "bg-green-500",
    },
    {
        title: "Beginner",
        planName: "Diploma in UIUX Design",
        duration: "4 months",
        certification: "Institute",
        features: [
            "In-depth UX research training",
            "Color Theory & Typography",
            "Photoshop Basics",
            "UI Design with Photoshop",
            "Basic Illustration Techniques",
            "Placement Assistance",
            "Portfolio Building",
        ],
        image: "https://storage.googleapis.com/a1aa/image/Ueyn4yi4jC2e-IuiJun06RxpEr19djNEgoTvwAIW9VM.jpg",
        color: "bg-orange-500",
    },
    {
        title: "Job Oriented OJT Program",
        planName: "The UIUX Design with AI",
        duration: "7 months",
        certification: "Institute",
        features: [
            "AI-Powered Design & AR VR introduction",
            "Design Thinking and Problem Solving",
            "AI in User Research and Testing",
            "Advanced Prototyping",
            "UX Writing & Accessibility",
            "Real-World Projects",
        ],
        image: "https://storage.googleapis.com/a1aa/image/qnqXVz3pm6tOp0ma06A9XY22-Fbnil30MqIQ0k5j3dY.jpg",
        color: "bg-blue-500",
    },
];

const PlanCard = ({ title, planName, duration, certification, features, image, color }) => {
    return (
        <div className={`rounded-xl shadow-lg p-6 w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 text-white ${color} hover:scale-105 transition-transform duration-300`}>
            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <img src={image} alt={planName} className="mx-auto mt-2 w-14 h-14 rounded-md" />
            </div>
            <h3 className="text-xl font-bold mb-4">{planName}</h3>
            <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-2"></i> Duration - {duration}
                </li>
                <li className="flex items-center">
                    <i className="fas fa-check text-green-300 mr-2"></i> Certification - {certification}
                </li>
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <i className="fas fa-check text-green-300 mr-2"></i> {feature}
                    </li>
                ))}
            </ul>
            <button className="mt-6 bg-black text-white py-2 px-4 rounded-full flex items-center justify-center w-full hover:bg-gray-900 transition duration-300">
                Buy Plan <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
    );
};

const BootCamp = () => {
    return (
        <div className="bg-white text-gray-800 px-6 py-10">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Plans for <span className="text-blue-600">Your Skill</span>{" "}
                    <span className="text-orange-500">For our Bootcamp</span>
                </h1>
                <p className="text-green-500 mt-2 text-sm md:text-base">HOW OUR BOOTCAMP COMPARES</p>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    Prepare to create a strong portfolio of cloud-based applications, poised to captivate top tech recruiters and land the job you want.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-10 place-items-center max-w-7xl m-auto">
                {bootcampPlans.map((plan, index) => (
                    
                    <PlanCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default BootCamp;
