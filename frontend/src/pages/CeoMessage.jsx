// src/pages/CeoMessage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function CeoMessage() {
  const { t } = useTranslation();

  return (
    <div className="bg-white font-lexend">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden rounded-b-4xl">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/pdg.jpg"
            alt="CEO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 rounded-b-4xl"></div>
        </motion.div>
        
        <motion.div
          className="absolute left-20 bottom-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">
            {t("ceoMessagePage.heroTitle")}
          </h1>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-text-black leading-relaxed">

        {/* Key Message */}
        <div className="relative p-8 border-l-4 border-primary-orange rounded-xl shadow-sm">
          <p className="text-xl italic text-text-black">
            {t("ceoMessagePage.quote")}
          </p>
        </div>

        {/* Intro */}
        <p className="text-lg text-justify max-w-3xl mx-auto">
          {t("ceoMessagePage.intro")}
        </p>

        {/* Thematic Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Partnership */}
          <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-text-black mb-3">
              {t("ceoMessagePage.sections.partnership.title")}
            </h3>
            <p className="text-justify">
              {t("ceoMessagePage.sections.partnership.content")}
            </p>
          </div>

          {/* Industrial Excellence */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-text-black mb-3">
              {t("ceoMessagePage.sections.industrialExcellence.title")}
            </h3>
            <p className="text-justify">
              {t("ceoMessagePage.sections.industrialExcellence.content")}
            </p>
          </div>

          {/* Strategic Needs */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-text-black mb-3">
              {t("ceoMessagePage.sections.strategicNeeds.title")}
            </h3>
            <p className="text-justify">
              {t("ceoMessagePage.sections.strategicNeeds.content")}
            </p>
          </div>

          {/* Environmental Commitment */}
          <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-text-black mb-3">
              {t("ceoMessagePage.sections.environmentalCommitment.title")}
            </h3>
            <p className="text-justify">
              {t("ceoMessagePage.sections.environmentalCommitment.content")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CeoMessage;
