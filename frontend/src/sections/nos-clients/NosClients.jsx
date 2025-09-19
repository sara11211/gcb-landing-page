import React from "react";
import { useTranslation } from "react-i18next";
import { clients } from "../../data/clients";

const NosClients = () => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col gap-12 mb-12'>
      <div className="flex flex-col gap-2 lg:flex-2 text-center">
        <p className="text-primary-orange text-sm">{t("clients.subtitle")}</p>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
          {t("clients.title")}
        </h2>
      </div>

      {/* logos part unchanged */}
      <div className="overflow-hidden relative h-16 sm:h-20 md:h-24 lg:h-28 w-full bg-white group">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex animate-scroll whitespace-nowrap group-hover:paused">
            {clients.concat(clients).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 mx-2 sm:mx-4 md:mx-6 shrink-0 bg-white p-2 sm:p-3 md:p-4 border border-gray-200 rounded-md"
              >
                <img
                  src={logo.image}
                  alt={`logo-${index}`}
                  className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosClients;
