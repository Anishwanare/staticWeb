import React from "react";

const Programs = () => {
    return (
        <div className="bg-gray-50 flex justify-center items-center lg:min-h-screen px-4 py-10">
            <div className="max-w-5xl w-full">
                <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
                    Career Track Program
                </h1>
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/e8dXh_swUxTIsV04njhqNho1_qK3CwIfMKodgLzdvbw.jpg"
                            alt="Person brainstorming UX design ideas"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 bg-gradient-to-r from-yellow-500 to-orange-400 p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-white mb-3">🎨 UX ACADEMY</h2>
                        <div className="bg-white text-gray-700 font-semibold px-4 py-2 rounded-full w-max text-sm mb-4 shadow-md">
                            📅 NEXT COHORT: <span className="text-orange-600 font-bold">JUNE 25, 2024</span>
                        </div>
                        <p className="text-white leading-relaxed mb-6">
                            For close to a decade, UX Academy has been the proven way to launch a career in digital design.
                            Most students start by taking UX Academy Foundations to build their UI skills before moving on
                            to complete UX Academy.
                        </p>
                        <button className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                            Learn More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
