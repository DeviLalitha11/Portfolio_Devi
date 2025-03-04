import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Ensure resume.pdf is in the public folder
        link.download = "My_Resume.pdf";
        link.click();
    };

    const handleScrollToContact = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.99, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/3 ml-8 hidden md:block" // Hide image on mobile (default hidden, show on md and above)
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative group">
                            <motion.img
                                src="images/pic3.jpeg"
                                alt="Profile"
                                className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 lg:h-2/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                        </div>

                    </motion.div>
                    <motion.div
                        className="md:w-2/3 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            About Me
                        </h2>
                        <p className="text-base leading-relaxed text-gray-300">
                        I am a Data Science student with a strong foundation in Python, Tableau, and web development. With experience as a MERN Stack Developer and a Machine Learning Intern, I have worked on projects like Speech Emotion Recognition and a Hospital Management System. Passionate about innovation and collaboration, I strive to deliver impactful and user-friendly solutions while continuously learning and growing in the tech field.
                        </p>
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-sm"
                                onClick={handleDownloadCV}
                            >
                                Download CV
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 text-sm"
                                onClick={handleScrollToContact}
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
