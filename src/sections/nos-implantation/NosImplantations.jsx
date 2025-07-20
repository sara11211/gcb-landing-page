import React, { useState } from "react";
import AlgerieMap from "./AlgerieMap";
import { ChevronRight } from "lucide-react";
import {wilayas} from "../../data/implantations"

const NosImplantations = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="overflow-hidden px-6 md:px-20">
      <h2 className="text-center font-poppins font-bold text-4xl md:text-5xl">
        <span className="text-primary-orange block font-medium text-[18px] mb-4">
          Nos Implantation
        </span>
        Nos implantations en Algérie
      </h2>

      {/* Responsive layout */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-start mt-12 md:mt-20 gap-2 md:gap-16">
        {/* List */}
        <div className="w-full md:max-w-md">
          {wilayas.map((city, index) => (
            <div key={city.name} className="border-b border-purple-200">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 lg:py-5 text-second-black font-medium lg:text-lg text-base focus:outline-none cursor-pointer"
              >
                {city.name}
                <ChevronRight
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-4 ${
                  activeIndex === index ? "max-h-40 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-sm text-gray-600">{city.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full md:w-auto md:-mr-[200px]">
          <AlgerieMap />
        </div>
      </div>
    </section>
  );
};

export default NosImplantations;
