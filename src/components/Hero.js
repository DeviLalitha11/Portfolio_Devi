import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '@fontsource/poppins';

const HeroSection = () => {
    // const handleOpenResume = () => {
    //     window.open('/resume.pdf', '_blank');
    // };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-6 py-20 bg-gradient-to-r from-[#0f172a] via-[#1e285f] to-[#3b0764] text-white">
            {/* Left Content */}
            <div className="text-center md:text-left md:w-1/2 md:pr-12 ml-8">
                <h1 className="font-playfair text-white text-3xl md:text-5xl font-bold mb-4">
                    Hello, I am{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        T. Devi Lalitha
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 font-poppins mb-6">
                    Machine Learning | Full Stack Developer
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition duration-300"
                    >
                        My Story
                    </button>

                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold rounded-full transition duration-300"
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/resume.pdf';
                            link.download = 'T_Devi_Lalitha_Resume.pdf';
                            link.click();
                        }}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-full transition duration-300"
                    >
                        Download CV
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-6 mt-4">
                    <a href="https://github.com/DeviLalitha11" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/DeviLalitha11/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-2xl">
                        <SiLeetcode />
                    </a>
                    <a href="https://www.linkedin.com/in/devi-lalitha/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_devi_arts/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Right Image */}
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
                            src="images/pic4.jpeg"
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
