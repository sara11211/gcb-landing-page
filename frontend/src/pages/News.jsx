import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Search, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { newsData } from '../data/articles';

const News = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? item.date === selectedDate : true; 
    return matchesSearch && matchesDate;
  });

  const totalPages = 5; // nombre réel d’articles

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section>
      <div className="bg-white font-lexend">
        {/* Hero */}
        <div className="relative h-[500px] overflow-hidden rounded-b-4xl">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/siege.jpg"
              alt="News"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 rounded-b-4xl"></div>
          </motion.div>

          <motion.div
            className="absolute left-20 bottom-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">
              {t("newsPage.title")}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 xl:px-32 xl:pt-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder={t("newsPage.searchPlaceholder")}
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:border-secondary-orange focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-gray-700">{t("newsPage.dateLabel")}</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
            <button className="p-2 bg-secondary-orange text-white rounded hover:bg-orange-400 cursor-pointer">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-primary-orange font-medium hover:underline flex items-center gap-1"
                  >
                    {t("newsPage.readMore")} <span className="text-sm">→</span>
                  </a>

                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">
                      {new Date(item.date).getDate()}
                    </div>
                    <div className="text-xs text-gray-600">
                      {new Date(item.date).toLocaleString("fr-FR", { month: "long" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-1">
          <button 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded ${currentPage === page ? 'bg-secondary-orange font-medium text-white' : 'border border-gray-300 hover:bg-gray-100'}`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default News