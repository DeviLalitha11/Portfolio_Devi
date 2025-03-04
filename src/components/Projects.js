import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Speech Emotion Recognition",
            image: "/images/Speech_Emotion_Recognition_Projects.webp",
            description:
                "Developed a machine learning model to classify emotions from speech audio using Python libraries like Librosa.",
            tags: ["Python", "Librosa", "Scipy"],
        },
        {
            id: 2,
            title: "Hospital Management System",
            image: "/images/hospital_projects.png",
            description:
                "Designed and developed a full-stack Hospital Management System with streamlined patient and staff management.",
            tags: ["React", "Node.js", "MongoDB"],
        },
        {
            id: 3,
            title: "Hackathon Website",
            image: "/images/Hackathon_Projects.jpg",
            description:
                "Built a responsive website using HTML and CSS for a college hackathon with a focus on design and usability.",
            tags: ["HTML", "CSS"],
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-16"
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                    <div className="absolute bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-bold mb-2 text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
