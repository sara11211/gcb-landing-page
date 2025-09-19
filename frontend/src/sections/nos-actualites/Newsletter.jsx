import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setError(t("news_.newsletter.invalid")); // show error if invalid
      setMessage("");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (res.ok) {
        setMessage(t("news_.newsletter.success")); // show success
        setError("");
        setEmail(""); // clear input
      } else {
        setError(data.message || "Something went wrong");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-second-black mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-6 sm:p-8 rounded-xl gap-6 lg:gap-4">
      <h3 className="text-white text-2xl sm:text-3xl font-bold text-center lg:text-left">
        {t("news_.newsletter.title")}
      </h3>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none px-4 sm:px-6 py-3 rounded-md bg-white placeholder:text-second-black placeholder:font-normal w-full"
          placeholder={t("news_.newsletter.placeholder")}
        />
        <button
          onClick={handleSubscribe}
          className="bg-primary-orange text-white px-4 sm:px-6 py-3 rounded-md cursor-pointer hover:bg-orange-600 whitespace-nowrap w-full sm:w-auto"
        >
          {t("news_.newsletter.button")}
        </button>
      </div>

      {/* Error or success messages */}
      {error && <p className="text-red-400 text-sm mt-3 lg:mt-0">{error}</p>}
      {message && <p className="text-green-400 text-sm mt-3 lg:mt-0">{message}</p>}
    </div>
  );
};

export default Newsletter;
