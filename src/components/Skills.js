import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiFlutter, SiTensorflow, SiExpress, SiTableau, SiArduino, SiGit } from 'react-icons/si';

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Git", icon: <SiGit className="text-red-500 text-4xl" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "ExpressJS", icon: <SiExpress className="text-white text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400 text-4xl" /> },
    { name: "Tableau", icon: <SiTableau className="text-orange-400 text-4xl" /> },
    { name: "IoT & Arduino", icon: <SiArduino className="text-blue-400 text-4xl" /> },
];

const Skills = () => {
    return (
        <section className="bg-gray-900 text-white py-20 px-8">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-16">
                My Skills
            </h2>

            <div className="max-w-4xl mx-auto">
                <Swiper
                    modules={[Autoplay, Grid]}
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: 'row'
                    }}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-800 hover:scale-105 transition-transform duration-300 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg w-24 h-24 mx-auto">
                                {skill.icon}
                                <p className="mt-2 text-xs font-semibold text-center">{skill.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Skills;
