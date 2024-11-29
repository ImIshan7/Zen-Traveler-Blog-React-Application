import { motion } from 'framer-motion';
import { FaCompass, FaCamera, FaBook, FaLeaf, FaMountain, FaHeart } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: FaCompass,
            title: "Curated Destinations",
            description: "Handpicked peaceful locations that promise tranquility and spiritual awakening",
            color: "text-zen-primary"
        },
        {
            icon: FaLeaf,
            title: "Mindful Experiences",
            description: "Immersive activities designed to nurture your inner peace and well-being",
            color: "text-zen-green"
        },
        {
            icon: FaMountain,
            title: "Sacred Places",
            description: "Ancient temples, monasteries, and natural sanctuaries for spiritual connection",
            color: "text-zen-secondary"
        },
        {
            icon: FaCamera,
            title: "Visual Stories",
            description: "Breathtaking photography capturing the essence of mindful travel experiences",
            color: "text-zen-sand"
        },
        {
            icon: FaBook,
            title: "Travel Guides",
            description: "Comprehensive guides for creating meaningful and transformative journeys",
            color: "text-zen-lavender"
        },
        {
            icon: FaHeart,
            title: "Community",
            description: "Connect with like-minded travelers and share your peaceful adventures",
            color: "text-zen-accent"
        }
    ];

    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Travel with Us</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the world differently through mindful travel and authentic connections
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;