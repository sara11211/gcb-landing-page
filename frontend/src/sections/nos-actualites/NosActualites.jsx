import React, { useState, useEffect } from "react";
import Button from "./Button";
import Newsletter from "./Newsletter";
import { useTranslation } from "react-i18next";

const NosActualites = () => {
  const { t, i18n } = useTranslation();

  // Récupère le tableau d'articles traduit depuis les fichiers i18n
  const localizedArticles = t("articles", { returnObjects: true }) || [];

  // selectedArticle initialisé quand les articles traduits sont disponibles
  const [selectedArticle, setSelectedArticle] = useState(
    localizedArticles.length ? localizedArticles[0] : null
  );

  // Quand la langue change ou que les articles traduits changent, on met à jour la sélection
  useEffect(() => {
    if (localizedArticles && localizedArticles.length) {
      setSelectedArticle(localizedArticles[0]);
    } else {
      setSelectedArticle(null);
    }
    // on surveille i18n.language pour réagir au changement de langue
  }, [i18n.language, localizedArticles.length]);

  // Option : afficher un fallback si pas d'articles
  if (!selectedArticle) {
    return (
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        <p className="text-center text-gray-500">{t("news_.noArticles", "Aucune actualité pour le moment")}</p>
      </section>
    );
  }

  return (
    <>
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col lg:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 lg:flex-2 text-center">
            <p className="text-primary-orange text-sm">{t("news_.sectionTitle")}</p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              {t("news_.header")}
            </h2>
          </div>
        </div>

        <div className="font-inter flex flex-col lg:flex-row items-start justify-center gap-8">
          {/* Main article */}
          <div className="flex flex-col gap-8 w-full lg:w-7/12">
            <div className="border border-gray-200 p-4 sm:p-6 md:p-8 gap-8 flex flex-col">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col gap-2 mb-6 sm:mb-8">
                  <p className="text-gray-500 text-sm">
                    {t("news_.by")}{" "}
                    <span className="text-purple-800">{selectedArticle.author}</span> |{" "}
                    {selectedArticle.date}
                  </p>
                  <h3 className="font-lexend font-bold text-xl sm:text-2xl">
                    {selectedArticle.title}
                  </h3>
                  <p className="text-second-gray text-sm">
                    {selectedArticle.description}
                  </p>
                </div>
                <Button textKey="news_.button" />
              </div>
            </div>
          </div>

          {/* Article list */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-lexend text-lg font-bold">{t("news_.allArticles")}</h3>
              <a href="#" className="text-purple-900 text-sm sm:text-base hover:underline">
                {t("news_.seeMore")}
              </a>
            </div>
            <ul className="font-inter">
              {localizedArticles.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedArticle(item)}
                  className={`cursor-pointer p-4 sm:p-8 flex flex-col gap-1 hover:bg-orange-background transition ${
                    selectedArticle.title === item.title ? "bg-orange-background" : ""
                  }`}
                >
                  <p className="text-xs sm:text-sm">
                    
                    <span className="text-purple-900">{item.author}</span> | {item.date}
                  </p>
                  <span className="font-sen text-base sm:text-lg font-bold">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default NosActualites;
