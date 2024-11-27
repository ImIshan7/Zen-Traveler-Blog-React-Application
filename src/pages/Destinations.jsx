import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import srilanka from '../images/location/SriLanka.png';
import japan from '../images/location/Japan.png';
import nepal from '../images/location/Nepal.png';
import bali from '../images/location/Bali.png';
import maldives from '../images/location/Maldives.png';
import thailand from '../images/location/Thailand.png';
const Destinations = () => {
    return (
        <div className="pt-16">
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif text-center mb-12"
                    >
                        Peaceful Destinations
                    </motion.h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="absolute bottom-0 p-6">
                                        <h3 className="text-white text-2xl font-serif mb-2">
                                            {destination.name}
                                        </h3>
                                        <p className="text-gray-200 mb-4">
                                            {destination.description}
                                        </p>
                                        <Link
                                            to={destination.link}
                                            className="inline-block btn btn-primary"
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const destinations = [
    {
        id: 'sri-lanka',
        name: 'Sri Lanka',
        description: 'Ancient temples, pristine beaches, and rich cultural heritage',
        image: srilanka,
        link: '/destinations/sri-lanka'
    },
    {
        id: 'japan',
        name: 'Japan',
        description: 'Ancient temples, zen gardens, and peaceful mountain retreats',
        image: japan,
        link: '/destinations/japan'
    },
    {
        id: 'nepal',
        name: 'Nepal',
        description: 'Himalayan meditation centers and Buddhist monasteries',
        image: nepal,
        link: '/destinations/nepal'
    },
    {
        id: 'bali',
        name: 'Bali',
        description: 'Sacred temples, rice terraces, and spiritual sanctuaries',
        image: bali,
        link: '/destinations/bali'
    },
    {
        id: 'maldives',
        name: 'Maldives',
        description: 'Paradise islands with crystal clear waters and marine life',
        image: maldives,
        link: '/destinations/maldives'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        description: 'Ancient temples, tropical beaches, and vibrant culture',
        image: thailand,
        link: '/destinations/thailand'
    }
];

export default Destinations;