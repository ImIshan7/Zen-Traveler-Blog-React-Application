import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import { FaMapMarkerAlt, FaCalendar, FaUmbrellaBeach, FaTemperatureHigh, FaLeaf } from 'react-icons/fa';

const Thailand = () => {
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
                bgImage="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80"
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
                            description="Southeast Asia"
                        />
                        <QuickFact
                            icon={<FaCalendar />}
                            title="Best Time"
                            description="Nov-Apr"
                        />
                        <QuickFact
                            icon={<FaTemperatureHigh />}
                            title="Climate"
                            description="Tropical"
                        />
                        <QuickFact
                            icon={<FaUmbrellaBeach />}
                            title="Highlights"
                            description="Culture & Beaches"
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
        title: "Bangkok",
        description: "Vibrant capital with temples, markets, and amazing street food",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        category: "City"
    },
    {
        title: "Phuket",
        description: "Thailand's largest island with beautiful beaches",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
        category: "Island"
    },
    {
        title: "Chiang Mai",
        description: "Cultural city with temples and mountain scenery",
        image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129?auto=format&fit=crop&w=800&q=80",
        category: "Culture"
    },
    {
        title: "Ayutthaya",
        description: "Ancient capital with impressive temple ruins",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        category: "History"
    },
    {
        title: "Krabi",
        description: "Stunning coastal province with limestone cliffs",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        category: "Nature"
    },
    {
        title: "Koh Samui",
        description: "Tropical island paradise with luxury resorts",
        image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
        category: "Luxury"
    }
];

const experiences = [
    {
        title: "Temple Tours",
        description: "Explore ancient Buddhist temples and cultural heritage",
        icon: FaMapMarkerAlt
    },
    {
        title: "Island Hopping",
        description: "Discover pristine beaches and hidden lagoons",
        icon: FaUmbrellaBeach
    },
    {
        title: "Jungle Adventure",
        description: "Trek through rainforests and meet elephants",
        icon: FaLeaf
    }
];

export default Thailand;