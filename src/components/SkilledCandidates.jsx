import React, { useState, useEffect } from "react";

const candidates = [
    { name: "Harsha P", previousRole: "Graphic Designer", newRole: "UI/UX Designer", salary: "4 LPA", image: "https://storage.googleapis.com/a1aa/image/kdZyroQfPYeAWVDc_27FZky6b2et6nFczqVH7KIC_4g.jpg" },
    { name: "Samir R", previousRole: "Electrical Engineer", newRole: "UI/UX Designer", salary: "5 LPA", image: "https://storage.googleapis.com/a1aa/image/wnldwg7O9ao-8ERqIT44jPSNifg7Kg6PNmOZrr8yk_E.jpg" },
    { name: "Geeta P", previousRole: "Mechanical Engineer", newRole: "UI/UX Designer", salary: "5 LPA", image: "https://storage.googleapis.com/a1aa/image/JyXdxAPMmqaVcrwoLmgrty3hSwEc6MFYgVHCK29mg60.jpg" },
    { name: "John D", previousRole: "Software Engineer", newRole: "Full Stack Developer", salary: "6 LPA", image: "https://storage.googleapis.com/a1aa/image/JyXdxAPMmqaVcrwoLmgrty3hSwEc6MFYgVHCK29mg60.jpg" },
    { name: "Alice M", previousRole: "Data Analyst", newRole: "Data Scientist", salary: "7 LPA", image: "https://storage.googleapis.com/a1aa/image/JyXdxAPMmqaVcrwoLmgrty3hSwEc6MFYgVHCK29mg60.jpg" },
    { name: "Michael B", previousRole: "Network Engineer", newRole: "Cloud Engineer", salary: "8 LPA", image: "https://storage.googleapis.com/a1aa/image/JyXdxAPMmqaVcrwoLmgrty3hSwEc6MFYgVHCK29mg60.jpg" }
];

const SkilledCandidatesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Adjust items per page based on screen size
    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalSlides = Math.ceil(candidates.length / itemsPerPage);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 py-14">
            {/* Heading */}
            <h1 className="text-center text-4xl font-bold mb-10">
                Progression for <span className="text-orange-500">Skilled Candidates</span>
            </h1>

            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array(totalSlides).fill().map((_, slideIndex) => (
                        <div key={slideIndex} className="flex min-w-full justify-center gap-6">
                            {candidates
                                .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                                .map((candidate, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-[90%] sm:w-[30%] transition-transform duration-500 transform hover:scale-105"
                                    >
                                        <img
                                            src={candidate.image}
                                            alt={`Portrait of ${candidate.name}`}
                                            className="w-20 h-20 rounded-full border-4 border-orange-500"
                                        />
                                        <h2 className="text-xl font-semibold mt-4">{candidate.name}</h2>
                                        <p className="text-green-600 text-sm mt-2">
                                            {candidate.previousRole} → {candidate.newRole}
                                        </p>
                                        <p className="text-blue-600 font-bold text-lg mt-2">{candidate.salary}</p>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkilledCandidatesCarousel;
