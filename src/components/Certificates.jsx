import React from "react";

const certificateData = {
    title: "Your UI/UX Design Certificate Awaits",
    subtitle: "UI/UX DESIGN BOOTCAMP CERTIFICATION",
    description:
        "Get a GrowthSchool certificate upon successful completion of the program.",
    image:
        "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg",
};

const Certificates = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 md:py-0 md:min-h-screen bg-white px-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">

                <img
                    src={certificateData.image}
                    alt="Certificate preview"
                    className="h-auto rounded-lg w-[15rem] md:w-[35rem] shadow-lg"
                />

                {/* Certificate Details */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {certificateData.title.split(" Certificate")[0]}{" "}
                        <span className="text-orange-500">Certificate</span>
                        {certificateData.title.split(" Certificate")[1]}
                    </h1>
                    <p className="text-green-500 text-lg md:text-xl mt-2">
                        {certificateData.subtitle}
                    </p>
                    <p className="text-gray-600 text-base md:text-lg mt-4">
                        {certificateData.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
