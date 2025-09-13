import { motion } from "framer-motion";
import { stats } from "../../data/stats";
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white mb-6 max-md:mt-20">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
          {/* Background Image with Overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <img
              src="/images/header/bg.jpg"
              alt={t("constructionSite")}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>

          {/* Content */}
          <div className="py-10 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="text-center lg:text-left max-w-4xl flex flex-col max-lg:gap-1 gap-20">
              <div>
                {/* Main Heading */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="inline-flex items-center">
                    <span className="relative text-white px-4 py-2 rounded-lg mr-4">
                      <img
                        className="absolute -z-10 right-0.75"
                        src="/images/header/shape.png"
                        alt=""
                      />
                      {t("hero.gcb")}
                    </span>
                    <span className="text-white">{t("hero.build")}</span>
                  </span>
                  <span className="italic font-light"> {t("hero.today")}</span>
                  <br />
                  <span className="text-white">{t("hero.solutions")}</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-sm sm:text-lg text-white max-w-3xl mx-auto lg:mx-0 mb-16 leading-relaxed xl:mr-80"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                  {t("hero.subtitle")}
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                className="flex max-md:flex-col gap-10 sm:gap-16"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.3 },
                  },
                }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-base text-white/80 font-medium">
                      {t(stat.labelKey)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="max-md:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>

          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-15 bg-black"></div>
        </div>
      </section>
    </>
  );
};

export default Header;
