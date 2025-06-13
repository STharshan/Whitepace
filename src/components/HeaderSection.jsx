import React from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';

const HeaderSection = () => {
  return (
    <div className="min-h-screen bg-[#0b2c66] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <img src={logo} alt="Logo" className="h-8 w-auto px-15" />
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="group relative flex items-center gap-1">
            <button className="hover:text-blue-300 flex items-center gap-1">
              Products <FaChevronDown className="text-xs" />
            </button>
          </div>
          <div className="group relative flex items-center gap-1">
            <button className="hover:text-blue-300 flex items-center gap-1">
              Solutions <FaChevronDown className="text-xs" />
            </button>
          </div>
          <div className="group relative flex items-center gap-1">
            <button className="hover:text-blue-300 flex items-center gap-1">
              Resources <FaChevronDown className="text-xs" />
            </button>
          </div>
            <div className="group relative flex items-center gap-1">
            <button className="hover:text-blue-300 flex items-center gap-1">
              Pricing <FaChevronDown className="text-xs" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-14">
          <button className="px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-400 flex items-center gap-2">
            Try Whitepace free <FaArrowRight />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        {/* Left Content */}
        <div className="flex-1 max-w-xl space-y-6">
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            Get More Done with <br />
            <span className="text-white">whitepace</span>
          </h1>
          <p className="text-white/80 text-base ">
            Project management software that enables your teams to collaborate, plan,
            analyze and manage everyday tasks
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded shadow flex items-center gap-2">
            Try Whitepace free <FaArrowRight />
          </button>
        </div>

        {/* Right Placeholder */}
        <div className="flex-1 w-full h-64 md:h-96 bg-blue-100 rounded-lg shadow-inner" />
      </section>
    </div>
  );
};

export default HeaderSection;
