import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const navigate = useNavigate();

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
    document.documentElement.dir = "ltr"; // FR + EN are LTR
  };

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 ${isHome ? "border-b" : ""
        } border-gray-200`}
    >
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
            <div className="ml-10 flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.key}
                    to={link.href}
                    className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive ? "text-primary-orange" : "text-white hover:text-primary-orange"}`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side (desktop only) */}
          <div className="hidden md:flex items-center space-x-1 xl:space-x-4">
            <Link
              to="/contact"
              className="cursor-pointer bg-primary-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-colors duration-200"
            >
              <span>{t("contacts")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>


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
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigationLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${isActive
                      ? "text-primary-orange bg-gray-50"
                      : "text-gray-700 hover:text-primary-orange hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              );
            })}

            {/* Contact button */}
            <Link
              to="/contact"
              className="cursor-pointer bg-primary-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-colors duration-200"
            >
              <span>{t("contacts")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Language button */}
            <button
              onClick={toggleLanguage}
              className="w-full px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {i18n.language === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
