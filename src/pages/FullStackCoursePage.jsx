import React from "react";
import CouseDuration from "../components/CouseDuration";
import CouseDays from "../components/CouseDays";

const FullStackCoursePage = () => {

    const fullStackCourse = {
        title: "Full Stack Development Roadmap",
        duration: "25 Days",
        schedule: [
            { day: 1, topics: ["Introduction to Full Stack Development", "Understanding Frontend vs Backend", "Overview of Web Technologies (HTML, CSS, JavaScript)"] },
            { day: 2, topics: ["HTML & CSS Fundamentals", "Building a Simple Web Page", "CSS Flexbox & Grid for Layouts"] },
            { day: 3, topics: ["JavaScript Basics: Variables, Data Types, and Functions", "DOM Manipulation & Events", "Introduction to ES6+ Features"] },
            { day: 5, assignment: "Build a personal portfolio webpage using HTML, CSS, and JavaScript." },
            { day: 7, topics: ["Frontend Frameworks: React.js Basics", "Components, Props, and State", "Creating a Simple React App"] },
            { day: 10, assignment: "Build a Todo App with React.js using Hooks and State Management." },
            { day: 12, topics: ["Connecting to Databases (MongoDB & SQL)", "CRUD Operations with Express & MongoDB", "Building a RESTful API"] },
            { day: 15, assignment: "Develop a simple API for managing user data using Express and MongoDB." },
            { day: 18, topics: ["Deployment Strategies", "Hosting Frontend on Vercel/Netlify", "Deploying Backend on Heroku/DigitalOcean"] },
            { day: 20, assignment: "Deploy a full-stack CRUD application with user authentication and API integration." },
            { day: 21, capstoneProject: { phase: "Kickoff", tasks: ["Choose a Real-World Problem", "Plan Database Schema & API Routes", "Design Wireframes & UI Components"] } },
            { day: 25, portfolio: { tasks: ["Submit and present your final full-stack project", "Create a developer portfolio showcasing your work"] } }
        ]
    };



    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16 gap-5 py-5 ">
            {/* Header */}
            <div className="text-center hover:underline cursor-pointer text-orange-600">
                <h1 className="text-4xl font-bold text-orange-500 mb-8">
                    Full Stack Development
                </h1>
            </div>

            {/* Course Overview */}
            <CouseDuration
                imgSrc="https://pilarr.com/wp-content/uploads/2022/06/What-is-full-stack-developer.png"
                title="Full Stack Development"
                details={[
                    { label: "📅 Duration", value: "45 Days" },
                    { label: "⚡ Skill Level", value: "Beginner to Intermediate" },
                    { label: "🎓 Certificate", value: "Yes" },
                    { label: "📆 Class Frequency", value: "5-6 sessions per week" },
                    { label: "💰 Fees", value: "₹21,000/-" },
                    { label: "🔥 One-Time Fees", value: "₹16,000/-" }
                ]}
                buttonText="Enroll Now"
            />


            {/* Day-wise Course Content */}
            <CouseDays {...fullStackCourse} />
        </div>
    );
};

export default FullStackCoursePage;
