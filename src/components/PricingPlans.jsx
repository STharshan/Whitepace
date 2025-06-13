import React from "react";
import { SiTicktick } from "react-icons/si";

const plans = [
  {
    title: "Free",
    price: "$0",
    head: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Personal",
    price: "$11.99",
    head: "Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Organization",
    price: "$49.99",
    head: "Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Choose{" "}
          <span className="underline decoration-yellow-400">Your Plan</span>
        </h2>
        <p className="text-black-600 mb-12 max-w-xl mx-auto">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full md:w-[280px] flex flex-col justify-between border border-amber-300 rounded-lg p-6 text-left transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:bg-blue-900 hover:text-white"
          >

            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold mb-4 group-hover:text-amber-300 transition-colors duration-300">
              {plan.price}
            </p>
            <p className="text-base font-semibold mb-2 group-hover:text-white transition-colors duration-300">
              {plan.head}
            </p>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 group-hover:text-white transition-colors duration-300"
                >
                  <SiTicktick className="w-4 h-4 mt-1 group-hover:text-amber-300 transition-colors duration-300 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 w-30 py-2 rounded bg-white border border-amber-300 group-hover:border-0 group-hover:bg-blue-400 group-hover:transition-colors duration-300"
            >
              Get Started
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
