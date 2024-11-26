import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="min-h-screen">
            <Parallax
                blur={0}
                bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
                strength={200}
                className="h-[60vh]"
            >

            </Parallax>

            <section className="py-20 px-4 bg-zen-light">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <ContactInfo
                            icon={FaEnvelope}
                            title="Email Us"
                            info="hello@zentravel.com"
                            delay={0.1}
                        />
                        <ContactInfo
                            icon={FaPhone}
                            title="Call Us"
                            info="+1 (555) 123-4567"
                            delay={0.2}
                        />
                        <ContactInfo
                            icon={FaMapMarkerAlt}
                            title="Visit Us"
                            info="123 Zen Street, Peace City"
                            delay={0.3}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h2 className="text-3xl font-serif mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zen-primary focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zen-primary focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zen-primary focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary flex items-center justify-center group"
                                >
                                    Send Message
                                    <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h2 className="text-3xl font-serif mb-6">FAQ</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactInfo = ({ icon: Icon, title, info, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="text-center p-6 bg-white rounded-lg shadow-lg"
    >
        <div className="inline-block p-4 rounded-full bg-zen-light mb-4">
            <Icon className="w-6 h-6 text-zen-primary" />
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-gray-600">{info}</p>
    </motion.div>
);

const faqs = [
    {
        question: "How can I book a mindful retreat?",
        answer: "Contact us with your preferred dates and destination, and our team will help you plan the perfect mindful retreat experience."
    },
    {
        question: "Do you offer custom travel itineraries?",
        answer: "Yes, we specialize in creating personalized travel experiences tailored to your interests and preferences."
    },
    {
        question: "What's included in your travel packages?",
        answer: "Our packages typically include accommodation, guided experiences, and cultural activities. Contact us for detailed information."
    }
];

export default Contact;