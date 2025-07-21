import React from 'react';
import { clients } from "../../data/clients";

const NosClients = () => {
  return (
    <div className="overflow-hidden relative h-24 w-full bg-white group">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex animate-scroll whitespace-nowrap group-hover:paused">
          {clients.concat(clients).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 mx-6 shrink-0 bg-white p-4 border-1 rounded-md border-gray-200"
            >
              <img src={logo.image} alt={`logo-${index}`} className="h-full object-contain grayscale hover:grayscale-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosClients;
