import NosActivites from "../sections/nos-activites/NosActivites";
import NosActualites from "../sections/nos-actualites/NosActualites";
import NosImplantations from "../sections/nos-implantation/NosImplantations";
import Hero from "../sections/hero/Hero";
import NosClients from "../sections/nos-clients/NosClients";
import NosProjects from "../sections/nos-projets/NosProjects";
import Footer from "../sections/footer/Footer";
import Header from "../sections/hero/Header";

const Home = () => {
  return (
    <main className="flex gap-24 flex-col font-lexend">
      <Header />
      <div className="flex gap-24 flex-col max-w-screen-2xl mx-auto">
        <NosActivites />
        <NosProjects />
        <NosActualites />
        <NosImplantations />
        <NosClients />
      </div>
    </main>
  );
};

export default Home;
