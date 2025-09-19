import React from "react";
import { CheckCircle } from "lucide-react";
import Footer from "../sections/footer/Footer"

export default function ConfirmationSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-second-black px-4 font-lexend">
      {/* Card */}
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-primary-orange" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-text-black mb-2">
          Abonnement confirmé !
        </h1>

        {/* Subtitle */}
        <p className="text-text-gray mb-6">
          Merci d’avoir confirmé votre abonnement à notre newsletter.  
          Vous recevrez désormais nos dernières actualités et mises à jour
          directement dans votre boîte mail.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block bg-primary-orange text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-secondary-orange transition-all"
        >
          Retour à l’accueil
        </a>
      </div>
    </div>
  );
}
