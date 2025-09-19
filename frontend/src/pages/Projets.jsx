// src/pages/Projects.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Projects() {
  const [activeTab, setActiveTab] = useState("grands-projets");
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  const tabs = [
    { id: "projets-cours", label: t("projectsPage.tabs.ongoing") },
    { id: "projets-realises", label: t("projectsPage.tabs.completed") },
    { id: "grands-projets", label: t("projectsPage.tabs.major") }
  ];

  // Récupérer les projets depuis i18n
  const currentProjects = t(activeTab, { returnObjects: true }) || [];

  const projectsPerPage = 6;
  const totalPages = Math.ceil(currentProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = currentProjects.slice(startIndex, startIndex + projectsPerPage);

  const goToPage = (page) => setCurrentPage(page);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

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
            src="/images/projets.jpg"
            alt="Projects"
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
            {t("projectsPage.title")}
          </h1>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center">
        <div className="bg-white rounded-2xl p-1 shadow-md inline-flex border border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-second-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl px-6 my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto xl:mx-24">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <button className="cursor-pointer text-white text-sm font-medium flex items-center gap-1">
                  {t("projectsPage.seeProject")} <ArrowRight size={14} />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 mb-12">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? "bg-orange-500 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="px-2 py-2 text-gray-400">
                  ...
                </span>
              );
            }
            return null;
          })}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
