import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const CustomizeSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side Image Placeholder */}
        <div className="md:w-1/2 bg-blue-200 h-64 w-full rounded-lg shadow-md"></div>

        {/* Right Side Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
            Customise it to <br />
            <span className="relative inline-block">
              <span className="relative z-10">your needs</span>
              <span
                className="absolute inset-x-0 bottom-1 h-2 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 340 20%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0,8 C30,12 60,4 100,8 C140,12 180,4 220,8 C260,12 300,4 340,8%22 stroke=%22%23FACC15%22 stroke-width=%226%22 fill=%22none%22 stroke-linecap=%22round%22 /%3E%3C/svg%3E')] bg-no-repeat bg-contain"
                aria-hidden="true"
              ></span>
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded transition flex items-center gap-2">
            Let’s Go <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
