import React from "react";

const courses = [
  {
    title: "UI Figma Design Course",
    description:
      "Master Figma, the go-to tool for UI design. Learn to create wireframes, interactive prototypes, and collaborate on real-world projects.",
    image: "https://storage.googleapis.com/a1aa/image/3bztaico4rHJnq1J3_GKgquInsgmCM1yzmUBPcmCnRg.jpg",
  },
  {
    title: "The UX Design Foundation",
    description:
      "The UX Design Foundation course introduces key concepts like user research, wireframing, prototyping, and usability testing.",
    image: "https://storage.googleapis.com/a1aa/image/tNMO7O3adXhL0lkkpyGBzP8TuMXS4RFQhVhUymWLtIg.jpg",
  },
  {
    title: "UI/UX Design Foundation",
    description:
      "The Diploma in UI/UX Design course provides in-depth training on creating user-friendly and visually appealing digital interfaces.",
    image: "https://storage.googleapis.com/a1aa/image/fov0yHnszLMCZxzAYaDLvbpoR4vIEQZNQC7nTx6IT2A.jpg",
  },
  {
    title: "The UI/UX Design with AI Diploma",
    description:
      "The UI/UX Bootcamp provides an intensive, hands-on learning experience for aspiring designers, covering real-world design projects.",
    image: "https://storage.googleapis.com/a1aa/image/2tEWtIOG6Mc-wrtjR3G5BOKxi_4WuQa_JncKtEzMFCc.jpg",
  },
];

const Courses = () => {
  return (
    <div className="bg-white text-gray-900 font-roboto pt-12 px-6 max-w-6xl m-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Our <span className="text-orange-500">Courses</span>
        </h1>
        <p className="text-green-500 text-lg mt-2">Enhance Your UI/UX Skills</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center px-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <img
                src={course.image}
                alt={course.title}
                className="mb-4 h-12 w-12 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-4 text-center">{course.title}</h2>
              <p className="text-gray-700 text-sm text-center">{course.description}</p>
              <div className="mt-6 flex justify-center">
                <button className="bg-black text-white py-2 px-4 rounded-full flex items-center hover:bg-orange-500">
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
