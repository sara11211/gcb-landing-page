import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function QHSE() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden rounded-b-4xl">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/qhse.jpg"
            alt="QHSE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 rounded-b-4xl"></div>
        </motion.div>

        <motion.div
          className="absolute left-6 md:left-20 bottom-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">
            {t("qhse.title")}
          </h1>
        </motion.div>
      </div>

      {/* Quality Section */}
      <section className="py-16 bg-white xl:px-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-orange-500 font-semibold text-sm uppercase mb-2">
                {t("qhse.quality.tag")}
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t("qhse.quality.heading")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("qhse.quality.paragraph")}
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                {t("qhse.quality.list", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <div
                className="bg-gray-50 p-6 rounded-lg shadow-sm flex justify-center cursor-pointer"
                onClick={() => setSelectedImage("/images/certificat1.png")}
              >
                <motion.img
                  src="/images/certificat1.png"
                  alt="Certificat ISO 9001"
                  className="max-w-full max-h-80 h-auto object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE Section */}
      <section className="py-16 bg-gray-50 xl:px-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <div
                className="bg-white p-6 rounded-lg shadow-sm flex justify-center cursor-pointer"
                onClick={() => setSelectedImage("/images/certificat2.png")}
              >
                <motion.img
                  src="/images/certificat2.png"
                  alt="Certificat ISO HSE"
                  className="max-w-full max-h-80 h-auto object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-orange-500 text-sm font-semibold mb-2">
                {t("qhse.hse.tag")}
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t("qhse.hse.heading")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("qhse.hse.paragraph")}
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                {t("qhse.hse.list", { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificat"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
