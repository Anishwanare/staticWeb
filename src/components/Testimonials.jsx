import React, { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Hitesh R",
        role: "UX Designer",
        image: "https://storage.googleapis.com/a1aa/image/_Ih3eOAv5Z4WXcs5OuhuWzyAJYRgYJicTNJyr-mC9yo.jpg",
        title: "Expertise Mentors supportive team",
        review:
            "Teaching staff is excellent. Method of teaching is too good. If there is any institute in Pune for UI/UX design course, then it is only UI/UX Design Box.",
        rating: 5,
    },
    {
        name: "Usha K",
        role: "UX Designer",
        image: "https://storage.googleapis.com/a1aa/image/lN-gWM-fITP1SMeqkTsKfpq5ujq9IsA7aGU46oo0zuc.jpg",
        title: "Project-based Real-time Projects",
        review:
            "Teaching staff is excellent. Method of teaching is too good. If there is any institute in Pune for UI/UX design course, then it is only UI/UX Design Box.",
        rating: 5,
    },
    {
        name: "Rajesh",
        role: "UX Designer",
        image: "https://storage.googleapis.com/a1aa/image/KIU3SZSKimbydIj-ExA9sQNHnJgP8QRrgmuwqWkM4jE.jpg",
        title: "Excellent Learning Experience",
        review: "UI/UX Design Box is the best place to learn UX/UI design. They teach from basic concepts of design till the portfolio.",
        rating: 5,
    },
    {
        name: "Priya M",
        role: "UI Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        title: "Amazing UI/UX Course",
        review: "I learned a lot from this course. The practical projects helped me build confidence in UI/UX design.",
        rating: 5,
    },
    {
        name: "Arun S",
        role: "Product Designer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        title: "Great Mentors & Support",
        review: "The mentorship and real-world projects provided a solid foundation for my career in design.",
        rating: 5,
    },
    {
        name: "Usha K",
        role: "UX Designer",
        image: "https://storage.googleapis.com/a1aa/image/lN-gWM-fITP1SMeqkTsKfpq5ujq9IsA7aGU46oo0zuc.jpg",
        title: "Project-based Real-time Projects",
        review:
            "Teaching staff is excellent. Method of teaching is too good. If there is any institute in Pune for UI/UX design course, then it is only UI/UX Design Box.",
        rating: 5,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Adjust items per slide based on screen width
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerPage));
        }, 3000);
        return () => clearInterval(interval);
    }, [itemsPerPage]);

    return (
        <div className="bg-white text-gray-800 py-12 px-4 container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2">
                Hear Testimonials from Our <span className="text-orange-500">Inspiring Alumni</span>
            </h2>
            <p className="text-center text-green-600 mb-8">UI/UX DESIGN BOOTCAMP REVIEWS</p>

            {/* Testimonials Carousel */}
            <div className="relative w-full flex justify-center overflow-hidden">
                <div className="w-full max-w-5xl overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, pageIndex) => (
                            <div key={pageIndex} className="w-full flex-shrink-0 flex justify-center gap-6">
                                {testimonials.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage).map((testimonial, index) => (
                                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6 border rounded-lg shadow-lg text-center">
                                        <div className="flex flex-col items-center">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                            <p className="text-gray-600">{testimonial.role}</p>
                                        </div>
                                        <h4 className="text-lg font-bold my-2">{testimonial.title}</h4>
                                        <p className="text-gray-700 mb-4">{testimonial.review}</p>
                                        <div className="flex justify-center text-yellow-500 mb-2">
                                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                                <i key={starIndex} className="fas fa-star text-3xl">*</i>
                                            ))}
                                        </div>
                                        <p className="text-gray-600">
                                            Google Post <i className="fab fa-google text-blue-500"></i>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
