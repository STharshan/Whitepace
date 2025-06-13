import React from "react";
import circle from "../assets/circle.png";

const AppsIntegrationSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 md:relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left side with icons */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80">
            <img
              src={circle}
              alt="App Integration Icons"
              className="w-full h-full object-contain"
            />
            {/* You can replace this image with individual icons placed absolutely if needed */}
          </div>
        </div>

        {/* Right side with text */}
        <div className="text-center md:text-left ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work with Your <br className="hidden md:inline" /> Favorite Apps Using <br className="hidden md:inline" />
            <span> whitepace</span>
          </h2>
          <p className="text-sm md:text-base text-blue-200 mb-6">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to
            have all the tools you need for your project success.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md transition">
            Read more →
          </button>
        </div>
      </div>

      {/* Decorative lines or shapes can be absolutely positioned here if needed */}
    </section>
  );
};

export default AppsIntegrationSection;
