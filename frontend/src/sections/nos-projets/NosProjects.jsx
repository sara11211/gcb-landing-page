import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";

const NosProjects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useTranslation();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.ceil(projects.length / 3) - 1 : prev - 1
        );
    };

    return (
        <section className="xl:relative w-full bg-second-black">
            {/* Background split */}
            <div className="xl:h-[100vh]">
                <div className="xl:h-[93.2%] xl:bg-second-black"></div>
                <div className="xl:h-[20%] xl:bg-white 2xl:hidden"></div>
            </div>

            {/* Content overlay */}
            <div className="xl:absolute xl:inset-0 px-4 md:px-12 lg:px-20 xl:px-32 flex flex-col">
                <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pt-16">
                        <div className="flex flex-col gap-2 lg:flex-2 text-white">
                            <p className="text-primary-orange text-sm">
                                {t("projects_.sectionTitle")}
                            </p>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                {t("projects_.header")}
                            </h2>
                        </div>

                        <div className="lg:flex-1 flex flex-col gap-6 text-white pt-4">
                            <p className="text-sm text-text-white max-w-md">
                                {t("projects_.description")}
                            </p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex gap-4 justify-end">
                        <button
                            onClick={prevSlide}
                            className="cursor-pointer w-12 h-12 rounded-full border border-white flex items-center justify-center transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="cursor-pointer w-12 h-12 rounded-full bg-primary-orange flex items-center justify-center hover:bg-orange-600 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                        .slice(currentSlide * 3, currentSlide * 3 + 3)
                        .map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden group"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <button className="cursor-pointer bg-primary-orange hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm transition-colors">
                                            {t("projects_.button")}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-[16px] font-semibold text-second-black leading-tight">
                                        {t(`projects_.${project.id}.title`)}
                                    </h3>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default NosProjects;
