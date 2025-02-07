import React from 'react';
import CouseDuration from '../components/CouseDuration';
import CouseDays from '../components/CouseDays';

const UiUxCoursePage = () => {
    const uiUxCourse = {
        title: "UI/UX Design Roadmap",
        duration: "30 Days",
        schedule: [
            { day: 1, topics: ["Introduction to UI/UX", "Difference Between UI and UX", "Understanding User-Centered Design"] },
            { day: 2, topics: ["Design Thinking Process", "Empathizing with Users", "Case Studies of Good & Bad UX"] },
            { day: 3, topics: ["UX Research Fundamentals", "Conducting User Interviews", "Creating User Personas"] },
            { day: 5, assignment: "Conduct a UX research study and create 2 user personas." },
            { day: 7, topics: ["Wireframing Basics", "Low-Fidelity Wireframes", "Introduction to Figma & Adobe XD"] },
            { day: 10, assignment: "Create wireframes for a mobile app based on a real-world problem." },
            { day: 12, topics: ["Visual Design Principles", "Typography & Color Theory", "UI Design Best Practices"] },
            { day: 15, assignment: "Design a landing page with proper color scheme and typography." },
            { day: 18, topics: ["Prototyping & Interactive UI", "Creating Clickable Prototypes in Figma", "Usability Testing Basics"] },
            { day: 20, assignment: "Create an interactive prototype and conduct usability testing with 5 users." },
            { day: 21, capstoneProject: { phase: "Kickoff", tasks: ["Select a problem statement", "Research and design UX flow", "Build a high-fidelity prototype"] } },
            { day: 30, portfolio: { tasks: ["Submit final project", "Create a portfolio showcasing design work", "Prepare for UI/UX job interviews"] } }
        ]
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16 gap-5 py-5">
            {/* Header */}
            <div className="text-center hover:underline cursor-pointer text-orange-600">
                <h1 className="text-4xl font-bold text-orange-500 mb-8">
                    UI/UX Design Course
                </h1>
            </div>

            {/* Course Overview */}
            <CouseDuration
                imgSrc="https://community.nasscom.in/sites/default/files/media/images/What%20is%20UIUX%20Transformation%20and%20How%20Does%20it%20Benefit%20Businesses-04_0.jpg"
                title="UI/UX Design"
                details={[
                    { label: "📅 Duration", value: "30 Days" },
                    { label: "⚡ Skill Level", value: "Beginner to Advanced" },
                    { label: "🎓 Certificate", value: "Yes" },
                    { label: "📆 Class Frequency", value: "5-6 sessions per week" },
                    { label: "💰 Fees", value: "₹18,000/-" },
                    { label: "🔥 One-Time Fees", value: "₹14,500/-" }
                ]}
                buttonText="Enroll Now"
            />

            {/* Day-wise Course Content */}
            <CouseDays {...uiUxCourse} />
        </div>
    );
};

export default UiUxCoursePage;
