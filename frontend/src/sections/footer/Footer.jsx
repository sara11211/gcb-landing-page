import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navigationLinks = [
    { name: t("footer.links.projects"), href: "/projects" },
    { name: t("footer.links.news"), href: "/news" },
    { name: t("footer.links.qhse"), href: "/qhse" },
    { name: t("footer.links.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-second-black text-white w-full">
      <div className="px-4 md:px-12 lg:px-20 xl:px-32 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left section - Logo and Copyright */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="w-24 h-24">
              <img src="/images/footer/logo.png" alt="logo" />
            </div>

            {/* Copyright */}
            <div className="text-sm text-text-white">
              <p>© 2025 GCB</p>
              <p>{t("footer.copyright")}</p>
            </div>
          </div>

          {/* Middle + Right sections */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:col-span-2">
            {/* Middle section - Description and Contact */}
            <div className="flex flex-col gap-6 max-w-md">
              <p className="text-sm text-text-white leading-relaxed">
                {t("footer.description")}
              </p>

              <div>
                <a
                  href="mailto:contact@gcb.dz"
                  className="text-white underline hover:text-primary-orange transition-colors font-medium"
                >
                  contact@gcb.dz
                </a>
              </div>
            </div>

            {/* Right section - Navigation */}
            <div>
              <h3 className="text-primary-orange font-medium text-base mb-3">
                {t("footer.navigation")}
              </h3>
              <nav>
                <ul className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-text-gray hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;