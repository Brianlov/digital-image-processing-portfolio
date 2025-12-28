import React from 'react';
import { motion } from 'framer-motion';
import avatarDip from '../assets/avatar_dip.png';
import hashIcon from '../assets/hash_icon.png';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[60vh]">
            {/* Hero Image Container Wrapper */}
            <div className="relative">
                {/* Hash Icon - Behind */}
                <motion.img
                    src={hashIcon}
                    alt="Decorative Icon"
                    className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] md:w-[300px] md:h-[300px] z-0 opacity-80"
                    initial={{ rotate: -15, scale: 0.8 }}
                    animate={{ rotate: 15, scale: 1 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />

                {/* Large Hero Image - Front */}
                <motion.div
                    className="relative z-10 w-full max-w-[500px] md:max-w-[700px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={avatarDip}
                        alt="BrianOoi"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-2xl">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Hi, I am <span className="text-accent">Brian</span>.
                    </h1>
                </div>

                <div className="mt-2 w-fit">
                    <div className="overflow-hidden whitespace-nowrap animate-typewriter w-0">
                        <p className="text-2xl md:text-3xl text-gray-300 font-casual tracking-wide">
                            A Final Year Computer Engineering student studying in UTeM.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-6 p-6 rounded-lg bg-white/5 border-l-4 border-accent shadow-sm w-full backdrop-blur-sm"
                >
                    <h3 className="text-lg font-bold text-white mb-2">Introduction</h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Hi everyone!

                        I’m Brian Ooi Teik Sheng can called me Brian.I am now diving into web app development and AI/ML stuff. I’m currently exploring how to combine both to build full-stack AI projects that actually provide big value.



                        I usually spend my free time reading, eating, or just sleeping. I really enjoy learning about the latest tech trends and experimenting with Node.js, Python, and React.



                        PEACE🤘
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
