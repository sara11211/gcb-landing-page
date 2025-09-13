import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const navigationLinks = [
  { key: "home", href: "/" },
  { key: "ceoMessage", href: "/ceo-message" },
  { key: "projects", href: "/projects" },
  { key: "news", href: "/news" },
  { key: "qHSE", href: "/qhse" },
];


  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = "ltr"; // both FR and EN are LTR
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/navbar/Logo.png"
              alt="logo"
              className="h-8 w-auto md:h-10 lg:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="cursor-pointer text-white hover:text-primary-orange px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Contact Button */}
            <button className="cursor-pointer bg-primary-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-colors duration-200">
              <span>{t("contacts")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Single Toggle Language Button */}
            <button
              onClick={toggleLanguage}
              className="cursor-pointer px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 bg-white"
            >
              {i18n.language === "fr" ? "EN" : "FR"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-orange hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-orange"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigationLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="text-gray-700 hover:text-primary-orange block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="px-3 py-2">
              <button className="w-full bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors duration-200">
                <span>{t("contacts")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Single Toggle Button */}
            <div className="px-3 py-2">
              <button
                onClick={toggleLanguage}
                className="w-full px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {i18n.language === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
