import React from "react";

const Achievement = () => {
    return (
        <div className="flex justify-center items-center bg-white my-10 py-14 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="bg-blue-500 text-white rounded-tr-3xl rounded-bl-3xl px-10 py-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-bold">₹8LPA+</div>
                    <div className="text-sm mt-2 opacity-90">Avg. pay package</div>
                </div>

                {/* Card 2 */}
                <div className="bg-green-500 text-white rounded-tr-3xl rounded-bl-3xl px-10 py-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-bold">44%</div>
                    <div className="text-sm mt-2 opacity-90">Average pay hike</div>
                </div>

                {/* Card 3 */}
                <div className="bg-yellow-500 text-white rounded-tr-3xl rounded-bl-3xl px-10 py-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-bold">2700+</div>
                    <div className="text-sm mt-2 opacity-90">Tech transitions</div>
                </div>

                {/* Card 4 */}
                <div className="bg-red-500 text-white rounded-tr-3xl rounded-bl-3xl px-10 py-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="text-4xl font-bold">4.77/5.00</div>
                    <div className="text-sm mt-2 opacity-90">Stars, Across 1600+ Reviews</div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
