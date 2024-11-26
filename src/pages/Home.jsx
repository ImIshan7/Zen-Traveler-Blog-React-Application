import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ImageSlider from '../components/ImageSlider';
import { FaCompass, FaCamera, FaBook, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [featuredRef, featuredInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const heroImages = [
        'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=2000&q=80',
        'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?auto=format&fit=crop&w=2000&q=80'
    ];

    const heroCaptions = [
        {
            title: "",
            subtitle: ""
        },
        {
            title: "",
            subtitle: ""
        },
        {
            title: "",
            subtitle: ""
        },
        {
            title: "",
            subtitle: ""
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[90vh]">
                <div className="absolute inset-0">
                    <ImageSlider images={heroImages} captions={heroCaptions} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative h-full flex items-center justify-center text-center text-white px-4"
                >
                    <div>
                        <motion.h1
                            variants={itemVariants}
                            className="font-serif text-6xl md:text-8xl mb-6 leading-tight"
                        >
                            Journey into
                            <span className="block text-zen-light">Tranquility</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
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
                    </div>
                </motion.div>
            </section>

            {/* Rest of the sections remain the same */}
            {/* Features Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div className="inline-block p-4 rounded-full bg-zen-light/20 mb-6">
                                    <feature.icon className="w-8 h-8 text-zen-primary" />
                                </div>
                                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Posts */}
            <section ref={featuredRef} className="py-24 px-4 bg-zen-light/20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate={featuredInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif mb-4">
                            Featured Stories
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
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

            {/* Stats Section */}
            <Parallax
                blur={0}
                bgImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
                strength={200}
                className="bg-fixed"
            >
                <section ref={statsRef} className="py-32 px-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial="hidden"
                        animate={statsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="grid md:grid-cols-4 gap-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center text-white"
                                >
                                    <div className="text-5xl font-bold mb-3 font-serif">{stat.value}</div>
                                    <div className="text-xl text-gray-200">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </Parallax>
        </div>
    );
};

const features = [
    {
        icon: FaCompass,
        title: "Curated Destinations",
        description: "Handpicked peaceful locations that promise tranquility and spiritual awakening"
    },
    {
        icon: FaCamera,
        title: "Visual Stories",
        description: "Breathtaking photography capturing the essence of mindful travel experiences"
    },
    {
        icon: FaBook,
        title: "Travel Guides",
        description: "Comprehensive guides for creating meaningful and transformative journeys"
    }
];

const featuredPosts = [
    {
        title: "Sacred Temples of Kyoto",
        excerpt: "Experience the spiritual heart of Japan through its ancient temples and zen gardens.",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Himalayan Meditation Retreats",
        excerpt: "Find inner peace in the world's most serene mountain settings and ancient monasteries.",
        image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Bali's Hidden Sanctuaries",
        excerpt: "Discover secret gardens, peaceful temples, and spiritual spots in the Island of Gods.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    }
];

const stats = [
    { value: "50+", label: "Destinations" },
    { value: "100+", label: "Travel Stories" },
    { value: "10k+", label: "Happy Readers" },
    { value: "5+", label: "Years of Experience" }
];

export default Home;