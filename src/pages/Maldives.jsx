import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import { FaMapMarkerAlt, FaCalendar, FaWater, FaSun, FaFish } from 'react-icons/fa';

const Maldives = () => {
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
                bgImage="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2000&q=80"
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
                            description="Indian Ocean"
                        />
                        <QuickFact
                            icon={<FaCalendar />}
                            title="Best Time"
                            description="Nov-Apr"
                        />
                        <QuickFact
                            icon={<FaSun />}
                            title="Climate"
                            description="Tropical"
                        />
                        <QuickFact
                            icon={<FaWater />}
                            title="Highlights"
                            description="Beaches & Marine Life"
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
        title: "Male City",
        description: "Vibrant capital with colorful buildings and bustling markets",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        category: "City"
    },
    {
        title: "Maafushi Island",
        description: "Budget-friendly paradise with water sports and local culture",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
        category: "Island Life"
    },
    {
        title: "Vaadhoo Island",
        description: "Famous for bioluminescent 'Sea of Stars'",
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
        category: "Natural Wonder"
    },
    {
        title: "Baa Atoll",
        description: "UNESCO Biosphere Reserve with manta rays and whale sharks",
        image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=800&q=80",
        category: "Marine Life"
    },
    {
        title: "Baros Island",
        description: "Luxury resorts and stunning overwater villas",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
        category: "Luxury"
    },
    {
        title: "Alimatha Island",
        description: "Perfect for diving and night snorkeling adventures",
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
        category: "Adventure"
    }
];

const experiences = [
    {
        title: "Underwater Adventure",
        description: "Explore vibrant coral reefs and diverse marine life",
        icon: FaFish
    },
    {
        title: "Island Hopping",
        description: "Discover multiple paradise islands in one journey",
        icon: FaMapMarkerAlt
    },
    {
        title: "Luxury Overwater Stay",
        description: "Experience the iconic Maldivian overwater villas",
        icon: FaWater
    }
];

export default Maldives;