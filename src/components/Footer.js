import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 text-center">
            <p className="text-gray-400 text-sm">
                © 2025 Devi Lalitha | All rights reserved.
            </p>
            <div className="flex justify-center space-x-5 mb-5">
                <a href="https://github.com/DeviLalitha11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/devi-lalitha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaLinkedin size={20} />
                </a>
                <a href="mailto:thathadevilalitha@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                    <FaEnvelope size={20} />
                </a>
                <a href="https://leetcode.com/u/DeviLalitha11/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <SiLeetcode size={20} />
                </a>
                <a href="https://www.instagram.com/_devi_arts/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaInstagram size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
