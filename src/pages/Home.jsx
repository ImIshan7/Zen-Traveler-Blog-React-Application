import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaCompass, FaCamera, FaBook, FaArrowRight } from 'react-icons/fa';
import Features from "../components/home/Features.jsx";
import Destinations from "../components/home/Destinations.jsx";

const Home = () => {
    const [featuredRef, featuredInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const headlineVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section
                className="relative h-[90vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="relative z-10 px-4"
                >
                    <motion.h1
                        variants={headlineVariants}
                        className="font-serif text-6xl md:text-8xl mb-6 leading-tight"
                    >
                        Journey into
                        <span className="block text-zen-light">Tranquility</span>
                    </motion.h1>
                    <motion.p
                        variants={headlineVariants}
                        className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200"
                    >
                        Discover peaceful destinations and mindful travel experiences
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Link
                            to="/destinations"
                            className="btn btn-primary text-lg group"
                        >
                            Explore Destinations
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}

            <Features/>

            {/* Destination Section */}

            <Destinations/>


            {/* Featured Posts Section */}
            <section ref={featuredRef} className="py-24 px-4 bg-zen-light/20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate={featuredInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={headlineVariants}
                            className="text-4xl md:text-5xl font-serif mb-4"
                        >
                            Featured Stories
                        </motion.h2>
                        <motion.p
                            variants={headlineVariants}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Explore our handpicked collection of tranquil destinations
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl mb-3">{post.title}</h3>
                                    <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                                    <Link
                                        to="/blog"
                                        className="inline-flex items-center text-zen-primary hover:text-zen-secondary font-medium transition-colors"
                                    >
                                        Read More
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};



const featuredPosts = [
    {
        title: "Sacred Temples of Kyoto",
        excerpt: "Experience the spiritual heart of Japan through its ancient temples and zen gardens.",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Himalayan Meditation Retreats",
        excerpt: "Find inner peace in the world's most serene mountain settings and ancient monasteries.",
        image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Bali's Hidden Sanctuaries",
        excerpt: "Discover secret gardens, peaceful temples, and spiritual spots in the Island of Gods.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    },
];

export default Home;
