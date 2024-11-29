import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import srilanka from '../../images/location/SriLanka.png';
import japan from '../../images/location/Japan.png';
import nepal from '../../images/location/Nepal.png';
import bali from '../../images/location/Bali.png';
const Destinations = () => {
    const destinations = [
        {
            title: "Sri Lanka",
            image: srilanka,
            link: "/destinations/sri-lanka"
        },
        {
            title: "Japan",
            image: japan,
            link: "/destinations/japan"
        },
        {
            title: "Nepal",
            image: nepal,
            link: "/destinations/nepal"
        },
        {
            title: "Bali",
            image: bali,
            link: "/destinations/bali"
        }
    ];

    return (
        <section className="py-24 px-4 bg-zen-light">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Popular Destinations</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our most beloved destinations for mindful travelers
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                        >
                            <img
                                src={destination.image}
                                alt={destination.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-serif text-white mb-4">{destination.title}</h3>
                                    <Link
                                        to={destination.link}
                                        className="inline-flex items-center text-white hover:text-zen-accent transition-colors"
                                    >
                                        Explore
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;