import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import { FaMapMarkerAlt, FaCalendar, FaLeaf, FaUmbrellaBeach, FaMountain } from 'react-icons/fa';
import nine from '../images/location/ninearach.png';
import sigiriya from '../images/location/SIGIRIYA.jpg';
import yala from '../images/location/yala.jpg';
import unawatuna from '../images/beach/unawatuna.jpg';
import kandy from '../images/location/Kandy.jpg';
import ella from '../images/location/ella.jpg';
import galle from '../images/location/Galle.jpg';


const SriLanka = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <Parallax
                blur={0}
                bgImage={nine}
                strength={200}
                className="h-[80vh]"
            >
            </Parallax>

            {/* Quick Facts */}
            <section className="py-16 bg-zen-light">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                    >
                        <QuickFact
                            icon={<FaMapMarkerAlt />}
                            title="Location"
                            description="South Asia, Indian Ocean"
                        />
                        <QuickFact
                            icon={<FaCalendar />}
                            title="Best Time"
                            description="December to March"
                        />
                        <QuickFact
                            icon={<FaLeaf />}
                            title="Climate"
                            description="Tropical & Warm"
                        />
                        <QuickFact
                            icon={<FaUmbrellaBeach />}
                            title="Highlights"
                            description="Beaches, Culture & Wildlife"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-serif text-center mb-16"
                    >
                        Must-Visit Destinations
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <DestinationCard key={index} {...destination} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Experiences */}
            <section className="py-20 bg-zen-primary text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-serif text-center mb-16"
                    >
                        Unique Experiences
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} {...experience} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const QuickFact = ({ icon, title, description }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="text-center"
    >
        <div className="text-4xl text-zen-primary mb-4 flex justify-center">
            {icon}
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-zen-dark/80">{description}</p>
    </motion.div>
);

const DestinationCard = ({ title, description, image, category, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg shadow-lg"
    >
        <div className="aspect-w-3 aspect-h-4">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 p-6">
        <span className="text-zen-accent text-sm font-medium mb-2 inline-block">
          {category}
        </span>
                <h3 className="text-white text-xl font-serif mb-2">{title}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{description}</p>
            </div>
        </div>
    </motion.div>
);

const ExperienceCard = ({ title, description, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
    >
        <div className="text-3xl text-zen-accent mb-4">
            <Icon />
        </div>
        <h3 className="text-xl font-serif mb-3">{title}</h3>
        <p className="text-white/80">{description}</p>
    </motion.div>
);

const destinations = [
    {
        title: "Sigiriya Rock Fortress",
        description: "Ancient palace and fortress complex with stunning frescoes and water gardens",
        image: sigiriya,
        category: "Cultural Heritage"
    },
    {
        title: "Yala National Park",
        description: "Home to leopards, elephants, and diverse wildlife",
        image: yala,
        category: "Wildlife"
    },
    {
        title: "Unawatuna Beach",
        description: "Pristine beaches perfect for swimming and snorkeling",
        image: unawatuna,
        category: "Beaches"
    },
    {
        title: "Temple of the Tooth",
        description: "Sacred Buddhist temple housing the relic of Buddha's tooth",
        image: kandy,
        category: "Religious Sites"
    },
    {
        title: "Ella",
        description: "Mountain village with stunning views and hiking trails",
        image: ella,
        category: "Hill Country"
    },
    {
        title: "Galle Fort",
        description: "Historic Dutch colonial fortress with charming streets",
        image:galle,
        category: "Colonial Heritage"
    }
];

const experiences = [
    {
        title: "Scenic Train Journeys",
        description: "Experience one of the most beautiful train rides through tea plantations",
        icon: FaMountain
    },
    {
        title: "Wildlife Safaris",
        description: "Encounter elephants, leopards, and exotic birds in their natural habitat",
        icon: FaLeaf
    },
    {
        title: "Cultural Immersion",
        description: "Explore ancient temples and participate in traditional ceremonies",
        icon: FaMapMarkerAlt
    }
];

export default SriLanka;