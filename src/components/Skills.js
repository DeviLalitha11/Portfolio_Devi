import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "C", level: 80 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "Data Science", level: 75 },
        { name: "React", level: 80 },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-16"
                >
                    My Skills
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
