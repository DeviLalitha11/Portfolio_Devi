import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendMessage = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const { name, email, message } = formData;

        // Validation: Ensure all fields are filled
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Construct mailto link
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location.href = `mailto:thathadevilalitha@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-8"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
                    Contact Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                📧
                            </div>
                            <div>
                                <p className="text-gray-400">Email</p>
                                <p className="font-medium">thathadevilalitha@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                📱
                            </div>
                            <div>
                                <p className="text-gray-400">Phone</p>
                                <p className="font-medium">+91 8309409096</p>
                            </div>
                        </div>
                    </div>

                    {/* Prevent form submission by default */}
                    <form className="space-y-6" onSubmit={handleSendMessage}>
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={4}
                                required
                                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group w-full py-3 px-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg px-6 py-3 text-white font-raleway">
                                Send Message
                            </div>
                        </motion.button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
