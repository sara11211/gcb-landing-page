import React from "react";
import NosActivites from "./sections/nos-activites/NosActivites";
import NosActualites from "./sections/nos-actualites/NosActualites";
import NosImplantations from "./sections/nos-implantation/NosImplantations";
import Hero from "./sections/hero/Hero";

const App = () => {
  return (
    <main className="flex gap-24 flex-col">
      <NosActivites />
      <NosActualites />
      <NosImplantations />
      <Hero />
    </main>
  );
};

export default App;
