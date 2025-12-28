import React from 'react';
import bgImage from '../assets/background.jpg';
import touchBubble from '../assets/touch_bubble.png';
import { motion, AnimatePresence } from 'framer-motion';
import BrushNoise from './NoiseReveal';

const Layout = ({ children }) => {
    const [isNoiseActive, setNoiseActive] = React.useState(false);
    const [isTitleHovered, setIsTitleHovered] = React.useState(false);

    return (
        <div className="min-h-screen bg-primary text-slate-200 font-sans selection:bg-accent selection:text-primary overflow-x-hidden">
            <BrushNoise isActive={isNoiseActive} onComplete={() => setNoiseActive(false)} />

            {/* Custom Background Image */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                {/* Dark Overlay for content readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <header className="absolute top-0 left-0 w-full p-6 z-50 pointer-events-none">
                <div
                    className="relative inline-block pointer-events-auto"
                    onMouseEnter={() => setIsTitleHovered(true)}
                    onMouseLeave={() => setIsTitleHovered(false)}
                >
                    <motion.h1
                        className="text-xl md:text-3xl font-bold font-sans tracking-tight inline-block text-stroke-yellow cursor-pointer select-none"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 8px rgb(251, 191, 36)", // Glow effect
                            rotate: [0, -1, 1, -1, 0],
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setNoiseActive(true)}
                    >
                        Digital Image Processing Portfolio
                    </motion.h1>

                    <AnimatePresence>
                        {isTitleHovered && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 20 }}
                                exit={{ opacity: 0, scale: 0.5, y: 10, x: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="absolute -bottom-[90px] -right-[100px] pointer-events-none z-50 flex items-center justify-center w-[160px] h-[120px]"
                            >
                                {/* Bubble Image */}
                                <img
                                    src={touchBubble}
                                    alt="Touch message"
                                    className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
                                />
                                {/* Text inside bubble */}
                                <p className="relative z-10 text-black font-casual font-bold text-lg -rotate-12 mb-4 mr-2">
                                    Touch Me!!!
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>


            <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
                {children}
            </main>

            <footer className="relative z-10 text-center py-8 text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Brian | Digital Image Processing Portfolio</p>
            </footer>
        </div>
    );
};

export default Layout;
