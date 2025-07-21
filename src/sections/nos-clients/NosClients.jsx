import React from 'react';
import {clients} from "../../data/clients"

const NosClients = () => {
  return (
    <div className="overflow-hidden relative h-24 w-full bg-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {clients.concat(clients).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 px-8 shrink-0"
            >
              <img src={logo.image} alt={`logo-${index}`} className="h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosClients;
