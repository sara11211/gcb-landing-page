import React, { useState } from "react";
import Button from "./Button";
import { articles } from "../../data/articles";

const NosActualites = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <section className="font-inter flex flex-col lg:flex-row items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 gap-8">
      {/* Left side: Main article */}
      <div className="flex flex-col gap-8 w-full lg:w-7/12">
        <h2 className="font-sen text-3xl sm:text-4xl font-bold">Actualité</h2>
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
              <h3 className="font-sen font-bold text-xl sm:text-2xl">
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
          <h3 className="font-sen text-3xl sm:text-4xl font-bold">Tous les articles</h3>
          <a href="#" className="text-purple-900 text-sm sm:text-base">Voir plus</a>
        </div>
        <ul className="font-inter">
          {articles.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedArticle(item)}
              className={`cursor-pointer p-4 sm:p-8 flex flex-col gap-2 hover:bg-orange-background transition ${
                selectedArticle.title === item.title
                  ? "bg-orange-background"
                  : ""
              }`}
            >
              <p className="text-sm sm:text-base">
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
    </section>
  );
};

export default NosActualites;
