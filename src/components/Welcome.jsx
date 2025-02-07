import React from "react";

const Welcome = () => {
    return (
        <div className="flex items-center justify-center w-full bg-gray-50 ">
            <div className="p-8 rounded-lg m-auto max-w-7xl flex flex-col md:flex-row items-center justify-center my-14">

                <div className="md:w-1/3">
                    <img
                        alt="Group of students in a classroom setting, discussing and smiling"
                        className="rounded-lg w-full h-auto"
                        src="https://storage.googleapis.com/a1aa/image/2UFbvvS06PDQDhpZZGVyLo251r7Ez5NbCCJrUfszZ7o.jpg"
                    />
                </div>
                <div className="md:w-1/2 md:pl-14 mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold text-gray-800">
                        WELCOME <span className="text-orange-500">UI UX Design Box</span>
                    </h1>
                    <h2 className="text-3xl font-bold text-gray-800 mt-4">
                        UI UX Design Course in Pune
                    </h2>
                    <p className="text-gray-700 mt-4">
                        UI/UX Design Box is a Design Institute with both offline and
                        online classes in Pune. Our{" "}
                        <span className="font-bold">
                            Best UI/UX Design Course in FC Pune
                        </span>{" "}
                        is a gateway to a very promising future in UI/UX Design. This
                        institute was established in 2015 with the help of industry
                        experts. We are focused on empowering our students with skills and
                        knowledge that are required to excel in this ever-evolving
                        industry of design.
                    </p>

                    {/* Call-to-Action Button */}
                    <button className="mt-6 px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
                        Admission Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
