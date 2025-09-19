import { useState } from "react";
import { activites } from "../../data/activites";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const NosActivites = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-12 lg:gap-20 px-4 md:px-12 lg:px-20 xl:px-32">
      <div className="flex flex-col lg:gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left side: subtitle + title */}
        <div className="flex flex-col gap-2 lg:flex-2">
          <p className="text-primary-orange text-sm">{t("activities.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            {t("activities.title")}
          </h2>
        </div>

        {/* Right side: paragraph */}
        <div className="lg:flex-1 max-sm:w-[90%] max-lg:w-[70%]">
          <p className=" text-sm pt-6 text-text-gray">
            {t("activities.description")}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20 max-w-7xl font-bold tracking-wide">
        <div className="flex">
          {/* Vertical bar with counter */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-1 h-40 bg-gray-200 relative mb-4">
              <div
                className="absolute top-0 left-0 w-1 bg-primary-orange transition-all duration-300"
                style={{
                  height: `${((activeIndex + 1) / activites.length) * 100}%`,
                }}
              />
            </div>
            <div className="text-sm text-gray-500 font-light -rotate-90">
              <span className="font-bold text-black pr-1">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              / {String(activites.length).padStart(2, "0")}
            </div>
          </div>

          {/* Titles list */}
          <div className="relative border-gray-200 pl-6 flex-1 text-sm md:text-base">
            {activites.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer py-1 transition-all duration-300 relative ${
                  index === activeIndex ? "font-bold text-white" : "text-black"
                }`}
              >
                <div
                  className={`absolute -left-6 h-full w bg-primary-orange transition-all duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`text-sm lg:text-base px-6 py-6 transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary-orange text-white shadow-orange-shadow shadow-xl"
                      : ""
                  }`}
                >
                  {t(`activities.items.${item.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image with animation */}
        <div className="lg:flex-3 max-md:max-w-[550px] mx-auto w-full h-[300px] lg:h-[400px] relative overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={activites[activeIndex].image}
              src={activites[activeIndex].image}
              alt={t(`activities.items.${activites[activeIndex].key}`)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover absolute top-0 left-0"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NosActivites;
