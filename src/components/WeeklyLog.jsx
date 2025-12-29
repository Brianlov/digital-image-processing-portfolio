import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Cpu } from 'lucide-react';
import { weeks } from '../data/weeks';

const WeeklyLog = () => {
    const [expandedWeek, setExpandedWeek] = useState(null);

    const toggleWeek = (id) => {
        setExpandedWeek(expandedWeek === id ? null : id);
    };

    return (
        <section className="w-full max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-white flex items-center justify-center gap-3">
                <Cpu className="text-accent w-8 h-8" />
                Learning Journey
            </h2>

            <div className="flex flex-col">
                {weeks.map((week) => (
                    <motion.div
                        key={week.id}
                        initial={false}
                        className="border-b border-gray-800"
                    >
                        <button
                            onClick={() => toggleWeek(week.id)}
                            className="w-full pt-8 pb-4 text-left focus:outline-none group transition-colors"
                        >
                            {/* Header: Week Label & Title */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-black px-2 py-1 bg-accent rounded-md uppercase tracking-wider">
                                        Week {week.id}
                                    </span>
                                    <h3 className={`text-2xl font-bold transition-colors ${expandedWeek === week.id ? 'text-accent' : 'text-white'}`}>
                                        {week.title.replace(/Week \d+: /, '')}
                                    </h3>
                                </div>
                            </div>

                            {/* Summary Text */}
                            <p className="text-gray-400 font-medium pl-1 mb-6">
                                {week.summary}
                            </p>

                            {/* Image: ALWAYS VISIBLE, 600px Height, 800px Width (via container) */}
                            <div className="w-full h-[600px] rounded-xl overflow-hidden bg-gray-900 border border-gray-800 mb-6 mx-auto relative group-hover:shadow-lg transition-all">
                                <img
                                    src={week.image}
                                    alt="DIP Concept"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Chevron: Below the image */}
                            <div className="flex justify-center w-full">
                                <ChevronDown
                                    className={`w-8 h-8 text-gray-500 transition-transform duration-300 ${expandedWeek === week.id ? 'rotate-180 text-accent' : 'group-hover:text-accent'}`}
                                />
                            </div>
                        </button>

                        {/* Collapsible Content: Only the details text */}
                        <AnimatePresence initial={false}>
                            {expandedWeek === week.id && (
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="pb-8">
                                        <div className="bg-white/5 border border-white/10 text-white p-6 rounded-lg shadow-inner">
                                            <div className="flex items-start gap-2 mb-3 text-accent text-sm font-bold uppercase tracking-wider">
                                                <BookOpen size={16} className="mt-0.5" />
                                                Learning Details
                                            </div>
                                            <div className="text-gray-300 leading-relaxed text-lg space-y-6 text-justify">
                                                {week.details}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WeeklyLog;
