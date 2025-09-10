import React from "react";
import NosActivites from "./sections/nos-activites/NosActivites";
import NosActualites from "./sections/nos-actualites/NosActualites";
import NosImplantations from "./sections/nos-implantation/NosImplantations";
import Hero from "./sections/hero/Hero";
import NosClients from "./sections/nos-clients/NosClients";
import NosProjects from "./sections/nos-projets/NosProjects";

const App = () => {
  return (
    <main className="flex gap-24 flex-col font-lexend">
      <NosActivites />
      <NosActualites />
      <NosImplantations />
      <NosClients />
      <NosProjects />
    </main>
  );
};

export default App;
