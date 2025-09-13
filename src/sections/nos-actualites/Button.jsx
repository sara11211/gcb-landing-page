import React from "react";
import { useTranslation } from "react-i18next";

const Button = ({ textKey = "news_.button" }) => {
  const { t } = useTranslation();
  return (
    <button className="bg-primary-orange font-sen font-bold text-white px-12 py-4 cursor-pointer hover:bg-orange-600 transition-colors">
      {t(textKey)} &gt;
    </button>
  );
};

export default Button;
