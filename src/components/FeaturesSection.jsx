import React from 'react';
import OrbitGraphic from './OrbitGraphic';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const FeaturesSection = () => {
  return (
    <div className="bg-white text-gray-900 px-4 md:px-20 py-15 space-y-20">

      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left text */}
        <div className="flex-1 space-y-4 max-w-md">
          <h2 className="text-4xl font-bold">Project <br /> <span className="text-gray-800">Management</span></h2>
          <p className="text-black-600 text-base">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. 
            Take photos with the mobile app and save them to a note.
          </p>
          <button className="mt-8 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium flex items-center gap-2">
            Get Started <FaArrowRight />
          </button>
        </div>

        {/* Right placeholder image */}
        <div className="flex-1 w-48 h-68 md:h-56 bg-blue-100 rounded-lg shadow-inner "/>

      </div>

      {/* Work Together Section */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <OrbitGraphic />
        
        {/* Right text */}
        <div className="flex-1 space-y-4 ml-35 w-788 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gray-800">together</span>
          </h2>
          <p className="text-gray-600 text-base">
            With whitepace, share your notes with your colleagues and collaborate on them. 
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium flex items-center gap-2">
            Try it now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
