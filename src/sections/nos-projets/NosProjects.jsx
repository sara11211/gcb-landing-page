import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const NosProjects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Réalisation en EPC base de vie Fabrication à Ain Tsila",
            image:
                "/images/nos-activites/image_1.jpg",
        },
        {
            id: 2,
            title: "Réalisation d'une station de dessalement à Corso, Boumerdès",
            image:
                "/images/nos-activites/image_4.jpg",
        },
        {
            id: 3,
            title: "Réalisation du réseau de collecte pour le raccordement à Tinhert à Alrar",
            image:
                "/images/nos-activites/image_5.jpg",
        },
        {
            id: 4,
            title: "Réalisation du réseau de collecte pour le raccordement à Tinhert à Alrar",
            image:
                "/images/nos-activites/image_2.jpg",
        },
        {
            id: 5,
            title: "Réalisation du réseau de collecte pour le raccordement à Tinhert à Alrar",
            image:
                "/images/nos-activites/image_3.jpg",
        },
                {
            id: 6,
            title: "Réalisation du réseau de collecte pour le raccordement à Tinhert à Alrar",
            image:
                "/images/nos-activites/image_1.jpg",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Math.ceil(projects.length / 3) - 1 : prev - 1
        );
    };

    return (
        <section className="relative w-full">
            {/* Background split */}
            <div className="h-[100vh]">
                <div className="h-[93.2%] bg-second-black"></div>
                <div className="h-[20%] bg-white"></div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 px-4 md:px-12 lg:px-20 xl:px-32 flex flex-col">
                <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 pt-16">
                        <div className="flex flex-col gap-2 lg:flex-2 text-white">
                            <p className="text-primary-orange text-sm">Nos Projets</p>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                Découvrez nos projets en
                                <br className="max-md:hidden" />
                                cours de réalisation
                            </h2>
                        </div>

                        <div className="lg:flex-1 flex flex-col gap-6 text-white pt-4">
                            <p className="text-sm text-text-white max-w-md">
                                Nos projets témoignent de l&apos;expertise et du savoir-faire de
                                GCB, réalisés avec rigueur et engagement pour répondre aux attentes
                                de nos partenaires.
                            </p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex gap-4 justify-end">
                        <button
                            onClick={prevSlide}
                            className="cursor-pointer w-12 h-12 rounded-full border border-white flex items-center justify-center  transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="cursor-pointer w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
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
                                            Voir le projet
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-second-black leading-tight">
                                        {project.title}
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
