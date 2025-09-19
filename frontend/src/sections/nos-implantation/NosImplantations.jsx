import React, { useState } from "react";
import AlgerieMap from "./AlgerieMap";
import { ChevronRight } from "lucide-react";
import { wilayas } from "../../data/implantations";
import { useTranslation } from "react-i18next";

const NosImplantations = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const { t } = useTranslation();

  const toggle = (index, cityId) => {
    setActiveIndex(index === activeIndex ? null : index);
    setSelectedCity(cityId);
  };

  return (
    <section className="overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="flex flex-col gap-2 lg:flex-2">
        <p className="text-primary-orange text-sm">{t("implantations.sectionTitle")}</p>
        <h2
          className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
          dangerouslySetInnerHTML={{ __html: t("implantations.header") }}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-start mt-12 md:mt-20 gap-2 md:gap-16">
        {/* Cities list */}
        <div className="w-full md:max-w-md">
          {wilayas.map((city, index) => (
            <div key={city.name} className="w-[80%] border-b border-purple-200">
              <button
                onClick={() => toggle(index, city.id)}
                className={`w-full flex justify-between items-center px-4 py-3 lg:py-4 font-medium lg:text-lg text-base focus:outline-none cursor-pointer ${
                  selectedCity === city.id
                    ? "text-primary-orange"
                    : "text-second-black"
                }`}
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
                  activeIndex === index ? "max-h-40 pb-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-sm text-gray-600">{city.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full md:w-auto xl:-mr-[200px] xl:-mt-[100px]">
          <AlgerieMap selectedCity={selectedCity} />
        </div>
      </div>
    </section>
  );
};

export default NosImplantations;
