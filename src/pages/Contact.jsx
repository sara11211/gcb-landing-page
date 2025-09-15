import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { coordinatesData } from "../data/coord";

const Contact = () => {
    const [openAccordions, setOpenAccordions] = useState({});
    const [openSubAccordions, setOpenSubAccordions] = useState({});

    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleSubAccordion = (id) => {
        setOpenSubAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <section className='font-lexend'>
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden rounded-b-4xl font-lexend">
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src="/images/contact.jpg"
                        alt="contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 rounded-b-4xl"></div>
                </motion.div>

                <motion.div
                    className="absolute left-6 md:left-20 bottom-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">
                        Contactez-nous
                    </h1>
                </motion.div>
            </div>

            {/* Contact Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-orange-500 font-medium uppercase tracking-wide mb-2">
                            Get Started
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-black">
                            Envoyez-nous un message
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-md mx-auto">
                            Remplissez le formulaire ci-dessous et nous reviendrons vers vous
                            dans les plus brefs délais.
                        </p>
                    </div>

                    <form className="bg-white p-10 rounded-2xl shadow-sm">
                        {/* Nom + Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom & Prénom <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:ring focus:ring-orange-500  outline-none transition"
                                    placeholder="Entrez votre nom complet"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Adresse e-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border rounded-xl border-gray-300 
                                    focus:ring focus:ring-orange-500 outline-none transition"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>

                        {/* Sujet + Destinataire */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sujet <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border rounded-xl border-gray-300 
                                    focus:ring focus:ring-orange-500 outline-none transition"
                                    placeholder="Sujet de votre message"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Destinataire <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:ring focus:ring-orange-500 outline-none transition bg-white"
                                >
                                    <option value="">Sélectionnez un destinataire</option>
                                    <option value="direction">Direction générale</option>
                                    <option value="webmaster">Webmaster</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-10">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                rows={6}
                                className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:ring focus:ring-orange-500 outline-none transition resize-none"
                                placeholder="Votre message..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 mx-auto cursor-pointer"
                            >
                                Envoyer le message
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <div className="max-w-5xl mx-auto p-6 py-20">
                <h1 className="text-4xl font-bold text-center text-text-black mb-12">
                    Nos Coordonnées
                </h1>

                <div className="space-y-4">
                    {Object.entries(coordinatesData).map(([categoryKey, category]) => (
                        <div
                            key={categoryKey}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            {/* Main Accordion */}
                            <button
                                onClick={() => toggleAccordion(categoryKey)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h2 className="text-xl font-semibold text-gray-700">
                                    {category.title}
                                </h2>
                                {openAccordions[categoryKey] ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            {openAccordions[categoryKey] && (
                                <div className="bg-gray-50 border-t border-gray-200">
                                    {Object.entries(category.departments).map(
                                        ([deptKey, dept]) => (
                                            <div
                                                key={deptKey}
                                                className="border-b border-gray-200 last:border-b-0"
                                            >
                                                {/* Sub Accordion */}
                                                <button
                                                    onClick={() => toggleSubAccordion(deptKey)}
                                                    className="w-full flex items-center justify-between p-4 pl-8 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    <h3 className="text-lg font-regular text-text-black">
                                                        {dept.name}
                                                    </h3>
                                                    {openSubAccordions[deptKey] ? (
                                                        <ChevronUp className="w-4 h-4 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                                    )}
                                                </button>

                                                {openSubAccordions[deptKey] && (
                                                    <div className="bg-white p-6 pl-12 border-t border-gray-200">
                                                        <div className="text-text-gray space-y-2 text-sm">
                                                            <p>
                                                                <span className="font-semibold">Adresse:</span>{" "}
                                                                {dept.address}
                                                            </p>
                                                            {dept.phone && (
                                                                <p>
                                                                    <span className="font-semibold">Tél:</span>{" "}
                                                                    {dept.phone}
                                                                </p>
                                                            )}
                                                            {dept.fax && (
                                                                <p>
                                                                    <span className="font-semibold">Fax:</span>{" "}
                                                                    {dept.fax}
                                                                </p>
                                                            )}
                                                            {dept.email && (
                                                                <p>
                                                                    <span className="font-semibold">Email:</span>{" "}
                                                                    <a
                                                                        href={`mailto:${dept.email}`}
                                                                        className="font-medium text-primary-orange hover:underline"
                                                                    >
                                                                        {dept.email}
                                                                    </a>
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact