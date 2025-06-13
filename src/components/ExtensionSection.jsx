import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const ExtensionSection = () => {
  return (
    <section className="bg-[#003366] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Use as <span className="underline text-white">Extension</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded transition flex items-center gap-2">
            Let's Go <FaArrowRight />
          </button>
        </div>

        {/* Placeholder for image or video */}
        <div className="md:w-1/2 bg-blue-200 h-64 w-full rounded-lg shadow-md"></div>
      </div>
    </section>
  );
};

export default ExtensionSection;
