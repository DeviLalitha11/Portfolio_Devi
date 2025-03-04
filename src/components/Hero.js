import React from 'react';
import { motion } from 'framer-motion';
import '@fontsource/poppins';

const HeroSection = () => {
    const text = "I am a Web Developer";

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-6 py-20">
            <div className="text-center md:text-left md:w-1/2 md:pr-12 ml-8">
                <h1 className="font-playfair text-white text-3xl md:text-5xl font-bold mb-6">
                    Hello, I am{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        T. Devi Lalitha
                    </span>
                </h1>
                <div className="font-serif flex flex-wrap gap-0.5 justify-center md:justify-start from-purple-500 to-blue-500">
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="font-raleway text-2xl md:text-4xl text-blue-400 font-light"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>
            </div>

            <div className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center items-center">
                <motion.div
                    className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-70"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/30">
                        <img
                            src="images/pic1.jpeg"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
