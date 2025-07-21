import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const projectData = [
    {
        category: "Full Stack Projects",
        projects: [
            {
                title: "International Hackathon Website",
                image: "/images/inthack.jpg",
                description: "Full-stack hackathon platform with team management and leaderboard.",
                tags: ["React", "Node.js", "MongoDB"],
                link: "https://pscmrhackathon2k25.netlify.app/",
            },
            {
                title: "Leaderboard System",
                image: "/images/leaderboard.png",
                description: "Real-time leaderboard with addding and removing users dynamically.",
                tags: ["React", "Express", "MongoDB"],
                link: "https://3w-task-one.netlify.app/",
            },
            {
                title: "Hospital Management System",
                image: "/images/hospital_projects.png",
                description: "A dynamic doctor-patient records and admin panel system.",
                tags: ["React", "Node.js", "MongoDB"],
                link: "https://github.com/DeviLalitha11/Hospital_Management-System",
            },
            {
                title: "Task Manager",
                image: "/images/task_manager.png",
                description: "Full-stack task app with backend APIs and authentication.",
                tags: ["React", "Node.js", "Express"],
                link: "https://devi-to-do-list.netlify.app/",
            },
        ],
    },
    {
        category: "ML & AI Projects",
        projects: [
            {
                title: "Speech Emotion Recognition",
                image: "/images/Speech_Emotion_Recognition_Projects.webp",
                description: "Machine Learning model to detect emotions from speech audio.",
                tags: ["Python", "Librosa", "Scipy", "Machine Learning", "TensorFlow"],
                link: "#",
            },
            {
                "title": "Dental X-ray Bone Loss Detection",
                "image": "/images/boneloss.png",
                "description": "Bone loss detection in dental x-rays using ML & Image Processing techniques.",
                "tags": ["Python", "OpenCV", "Machine Learning", "Image Processing"],
                "link": "https://github.com/DeviLalitha11/Bone_Loss_Detection"
            }
        ],
    },
    {
        category: "Frontend Projects",
        projects: [
            {
                title: "Hackathon Website",
                image: "/images/Hackathon_Projects.jpg",
                description: "Static hackathon site focused on design & usability.",
                tags: ["HTML", "CSS"],
                link: "https://pscmrhackathon2024.netlify.app/",
            },
        ],
    },
];

const Projects = () => {
    return (
        <section className="bg-gray-900 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12"
                >
                    My Projects
                </motion.h2>

                {projectData.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">{category.category}</h3>

                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1.2 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                        >
                            {category.projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="bg-gray-800 rounded-xl overflow-hidden shadow-md flex flex-col h-full"
                                    >
                                        <div className="w-full h-44 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h4 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {project.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-2 py-1 bg-blue-500 rounded-full text-white"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 text-white inline-block text-center bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm hover:scale-105 transition-transform"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
