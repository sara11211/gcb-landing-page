import React, { useState } from "react";
import Button from "./Button";
import { articles } from "../../data/articles";
import { section } from "framer-motion/client";

const NosActualites = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col gap-12 lg:gap-20">
      <div className="flex flex-col lg:gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left side: subtitle + title */}
        <div className="flex flex-col gap-2 lg:flex-2 text-center">
          <p className="text-primary-orange text-sm">Nos Actualités</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            En direct de GCB
          </h2>
        </div>

      </div>

      <div className="font-inter flex flex-col lg:flex-row items-start justify-center gap-8">

        {/* Left side: Main article */}
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
                  By{" "}
                  <span>
                    <a href="#" className="text-purple-800">
                      {selectedArticle.author}
                    </a>
                  </span>{" "}
                  | {selectedArticle.date}
                </p>
                <h3 className="font-lexend font-bold text-xl sm:text-2xl">
                  {selectedArticle.title}
                </h3>
                <p className="text-second-gray text-sm">
                  {selectedArticle.description}
                </p>
              </div>
              <Button />
            </div>
          </div>
        </div>

        {/* Right side: List of articles */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-lexend text-lg sm:text- font-bold">Tous les articles</h3>
            <a href="#" className="text-purple-900 text-sm sm:text-base hover:underline">Voir plus</a>
          </div>
          <ul className="font-inter">
            {articles.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedArticle(item)}
                className={`cursor-pointer p-4 sm:p-8 flex flex-col gap-1 hover:bg-orange-background transition ${selectedArticle.title === item.title
                    ? "bg-orange-background"
                    : ""
                  }`}
              >
                <p className="text-xs sm:text-sm">
                  By <span className="text-purple-900">{item.author}</span> |{" "}
                  {item.date}
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
  );
};

export default NosActualites;
