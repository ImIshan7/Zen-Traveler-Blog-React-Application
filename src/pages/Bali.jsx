import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import { FaMapMarkerAlt, FaCalendar, FaLeaf, FaUmbrellaBeach, FaTemperatureHigh } from 'react-icons/fa';
import pasikudah from '../images/beach/Pasikudah.jpg';

const Bali = () => {
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
            <Parallax
                blur={0}
                bgImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=80"
                strength={200}
                className="h-[80vh]"
            >
            </Parallax>

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
                            description="Indonesia"
                        />
                        <QuickFact
                            icon={<FaCalendar />}
                            title="Best Time"
                            description="Apr-Oct (Dry Season)"
                        />
                        <QuickFact
                            icon={<FaTemperatureHigh />}
                            title="Climate"
                            description="Tropical"
                        />
                        <QuickFact
                            icon={<FaUmbrellaBeach />}
                            title="Highlights"
                            description="Beaches & Culture"
                        />
                    </motion.div>
                </div>
            </section>

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
        title: "Ubud",
        description: "Cultural heart with rice terraces and art galleries",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        category: "Culture"
    },
    {
        title: "Uluwatu Temple",
        description: "Clifftop temple with stunning ocean views",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        category: "Spiritual"
    },
    {
        title: "Nusa Penida",
        description: "Dramatic cliffs and pristine beaches",
        image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
        category: "Nature"
    },
    {
        title: "Tanah Lot",
        description: "Iconic sea temple on a rocky outcrop",
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=800&q=80",
        category: "Temple"
    },
    {
        title: "Seminyak",
        description: "Luxury beach resorts and sunset views",
        image: pasikudah,
        category: "Beach"
    },
    {
        title: "Mount Batur",
        description: "Active volcano with sunrise trekking",
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=800&q=80",
        category: "Adventure"
    }
];

const experiences = [
    {
        title: "Temple Hopping",
        description: "Explore ancient temples and spiritual sites",
        icon: FaMapMarkerAlt
    },
    {
        title: "Beach Life",
        description: "Relax on pristine beaches and watch stunning sunsets",
        icon: FaUmbrellaBeach
    },
    {
        title: "Cultural Immersion",
        description: "Experience traditional ceremonies and crafts",
        icon: FaLeaf
    }
];

export default Bali;