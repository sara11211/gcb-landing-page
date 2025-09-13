import React from "react";
import { motion } from "framer-motion";
import NosActivites from "../sections/nos-activites/NosActivites";
import NosActualites from "../sections/nos-actualites/NosActualites";
import NosImplantations from "../sections/nos-implantation/NosImplantations";
import Hero from "../sections/hero/Hero";
import NosClients from "../sections/nos-clients/NosClients";
import NosProjects from "../sections/nos-projets/NosProjects";
import Footer from "../sections/footer/Footer";
import Header from "../sections/hero/Header";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="flex gap-24 flex-col font-lexend">
      <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5, ease: "easeOut" }} variants={sectionVariants}>
        <Header />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <NosActivites />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <NosProjects />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <NosActualites />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <NosImplantations />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <NosClients />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} variants={sectionVariants}>
        <Footer />
      </motion.div>
    </main>
  );
};

export default Home;
