import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// A noise texture with salt (white) and pepper (black) dots on a transparent background
const noiseSvg = encodeURIComponent(`
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -9"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" opacity="0.3"/>
</svg>
`);

const NoiseReveal = ({ isActive, onComplete }) => {

    useEffect(() => {
        if (isActive) {
            // Automatically clear the noise after some time if it's just a splash effect
            const timer = setTimeout(() => {
                onComplete();
            }, 2000); // Noise stays for 1.5s then brushes away
            return () => clearTimeout(timer);
        }
    }, [isActive, onComplete]);

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        // Simulate a brush wipe reveal by masking
                        maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
                        transition: { duration: 1.5, ease: "easeInOut" } // Slow brush away
                    }}
                >
                    {/* The "Dequality" Layer - Blurs and Desaturates the background */}
                    <motion.div
                        className="absolute inset-0 backdrop-blur-[2px] backdrop-grayscale-[80%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                    />

                    {/* The Salt & Pepper Noise Layer */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
                            backgroundRepeat: 'repeat',
                            mixBlendMode: 'overlay',
                        }}
                    ></div>

                    {/* Additional random static dots (Salt/Pepper) via a second layer for density */}
                    <div
                        className="absolute inset-0 w-full h-full opacity-60"
                        style={{
                            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #000000 1px, transparent 1px)`,
                            backgroundSize: '4px 4px',
                            backgroundPosition: '0 0, 2px 2px'
                        }}
                    ></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NoiseReveal;
