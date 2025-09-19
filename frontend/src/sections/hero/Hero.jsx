import { useState } from "react";
import Button from "./Button";

export default function Hero() {
  const slides = [
    "/images/hero/image_1.jpg",
    "/images/hero/image_2.jpg",
    "/images/hero/image_3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const prevSlide = () => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const peekIndex = (currentIndex + 1) % slides.length;

  const currentNumber = String(currentIndex + 1).padStart(2, "0");

  return (
    <section className="relative">
      <div className="relative w-full h-screen overflow-hidden">
        <div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start py-28 h-full px-32">
          <h1 className="text-6xl font-bold text-white mb-4 uppercase leading-16">
            GCB change <br />
            durablement <br />
            les territoires
          </h1>
          <Button />
        </div>

        <div
          className={`absolute top-0 right-0 bg-cover bg-center transition-all duration-500 ease-in-out rounded-tl-4xl rounded-bl-4xl ${
            animating ? "w-full h-full" : "w-1/8 h-1/2 top-1/4 "
          }`}
          style={{ backgroundImage: `url(${slides[peekIndex]})` }}
        ></div>
      </div>

      <div className="absolute bottom-0 w-full backdrop-blur-md flex items-center justify-between px-32 py-3 z-20">
        <div className="text-white/80 flex items-center gap-3">
          <p>{currentNumber}</p>
          <div className="border-t w-20 bg-white/80"></div>
          <p>Construire aujourd'hui les infrastructures de demain.</p>
        </div>
        <div className="flex items-center gap-5">
          <button className="cursor-pointer" onClick={prevSlide}>
            <img src="/icons/left-arrow.svg" alt="Previous" />
          </button>

          <button className="cursor-pointer" onClick={nextSlide}>
            <img src="/icons/right-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
}
