import React from "react";
import NosActivites from "./sections/nos-activites/NosActivites";
import NosActualites from "./sections/nos-actualites/NosActualites";

const App = () => {
  return (
    <main className="flex gap-24 flex-col">
      <NosActivites />
      <NosActualites />
    </main>
  );
};

export default App;
