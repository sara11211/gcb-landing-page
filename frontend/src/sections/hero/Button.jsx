import React from "react";

const Button = ({ text = "En savoir plus" }) => {
  return (
    <button className="mt-4 px-6 py-3 bg-secondary-orange text-black rounded-full font-semibold cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
