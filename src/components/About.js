import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Activity, BarChart3 } from "lucide-react"; // App Dev icon: Smartphone

const About = () => {
    const skills = [
        {
            icon: <Code className="h-6 w-6 text-purple-400" />,
            title: "Web Development",
            desc: "Experienced with MERN stack and full-stack applications."
        },
        {
            icon: <Smartphone className="h-6 w-6 text-purple-400" />,
            title: "App Development",
            desc: "Built cross-platform mobile apps with Flutter and Firebase."
        },
        {
            icon: <Activity className="h-6 w-6 text-purple-400" />,
            title: "Machine Learning",
            desc: "Trained ML models for prediction and classification tasks."
        },
        {
            icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
            title: "Data Visualization",
            desc: "Proficient in Tableau, Power BI and Python visualization libraries."
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-8"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    I'm a passionate Data Science student with hands-on experience in web and app development, machine learning, and data visualization. I’ve built impactful projects like Speech Emotion Recognition and full-stack applications using the MERN stack. I'm driven by innovation, eager to learn, and always focused on creating user-centric solutions that make a real-world difference.
                </motion.p>

                {/* Skills Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#111827] rounded-xl p-4 shadow-md flex flex-col items-center text-center h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.2 }}
                        >
                            <div className="mb-3">{skill.icon}</div>
                            <h3 className="text-md font-semibold text-purple-400">{skill.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default About;
