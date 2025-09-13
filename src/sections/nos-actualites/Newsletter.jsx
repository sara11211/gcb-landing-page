import React from "react";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-second-black mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-6 sm:p-8 rounded-xl gap-6 lg:gap-4">
      <h3 className="text-white text-2xl sm:text-3xl font-bold text-center lg:text-left">
        {t("news_.newsletter.title")}
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <input
          type="text"
          className="outline-none px-4 sm:px-6 py-3 rounded-md bg-white placeholder:text-second-black placeholder:font-normal w-full"
          placeholder={t("news_.newsletter.placeholder")}
        />
        <button className="bg-primary-orange text-white px-4 sm:px-6 py-3 rounded-md cursor-pointer hover:bg-orange-600 whitespace-nowrap w-full sm:w-auto">
          {t("news_.newsletter.button")}
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
