import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ZoomableImage = ({ src, alt, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Thumbnail */}
            <div
                className={`relative cursor-pointer group ${className ? className.replace('object-cover', '') : ''}`}
                onClick={() => setIsExpanded(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`${className || ''} w-full h-full object-cover`}
                />
            </div>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsExpanded(false)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                        >
                            <X size={32} />
                        </button>

                        {/* Image */}
                        <motion.img
                            src={src}
                            alt={alt}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself? Actually clicking image to close is often expected on mobile, but let's keep it standard.
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ZoomableImage;
