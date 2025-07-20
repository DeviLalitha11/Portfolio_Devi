import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const companies = [
    { name: "Networx", logo: "/images/networx.jpeg", link: "https://www.linkedin.com/company/networx-app/posts/?feedView=all" },
    { name: "Suthra Technologies", logo: "/images/suthra.png", link: "https://suthratech.com/" },
    { name: "Talent Shine", logo: "/images/talentshine.png", link: "https://talentshine.com/" },
    { name: "Data Valley", logo: "/images/datavalley.png", link: "https://datavalley.ai/" },
    { name: "Sense Semiconductor", logo: "/images/ssit.png", link: "https://sensesemi.in/" },
];

const Companies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-gray-900 text-white py-16 px-8 font-raleway">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
                    Companies I've Worked With
                </h2>
                <Slider {...settings}>
                    {companies.map((company, index) => (
                        <motion.a
                            key={index}
                            href={company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="p-4"
                        >
                            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center h-64 w-64 mx-auto transition duration-300 ease-in-out hover:shadow-xl">
                                <div className="bg-white rounded-full p-3 shadow-inner mb-4">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                                <p className="text-sm text-gray-300 font-medium hover:text-blue-400 transition-colors">
                                    {company.name}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Companies;
