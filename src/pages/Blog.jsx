import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/shared/PageHeader';
import { FaArrowRight, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import sigiriya from '../images/location/SIGIRIYA.jpg';


const Blog = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title=""
                subtitle=""
                image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                    <span className="bg-zen-accent text-zen-dark px-4 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <span className="flex items-center">
                      <FaCalendar className="mr-2" /> {post.date}
                    </span>
                                        <span className="flex items-center">
                      <FaUser className="mr-2" /> {post.author}
                    </span>
                                    </div>
                                    <h2 className="font-serif text-2xl mb-4 hover:text-zen-primary transition-colors">
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center text-zen-primary hover:text-zen-secondary transition-colors group"
                                    >
                                        Read More
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const blogPosts = [
    {
        id: 1,
        title: "A Journey Through Japan's Ancient Temples",
        excerpt: "Discover the spiritual heart of Japan as we explore the serene temples of Kyoto, where centuries-old traditions meet modern mindfulness practices...",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
        date: "March 15, 2024",
        author: "Sarah Chen",
        category: "Culture"
    },
    {
        id: 2,
        title: "Finding Peace in the Himalayas",
        excerpt: "Join us on a transformative journey through Nepal's mystical monasteries and meditation retreats, where ancient wisdom meets breathtaking landscapes...",
        image: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80",
        date: "March 10, 2024",
        author: "David Park",
        category: "Adventure"
    },
    {
        id: 3,
        title: "Sacred Spaces of Bali",
        excerpt: "Explore the hidden temples and spiritual sanctuaries of Bali, where every corner tells a story of devotion and inner peace...",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        date: "March 5, 2024",
        author: "Maya Patel",
        category: "Spirituality"
    },
    {
        id: 4,
        title: "Sri Lanka's Ancient Wonders",
        excerpt: "Uncover the mysteries of Sigiriya Rock Fortress and explore the cultural treasures of this tropical paradise...",
        image: sigiriya,
        date: "March 1, 2024",
        author: "Sarah Chen",
        category: "History"
    },
    {
        id: 5,
        title: "Mindful Moments in Mountain Retreats",
        excerpt: "Experience the tranquility of high-altitude meditation centers and discover inner peace among the clouds...",
        image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
        date: "February 25, 2024",
        author: "David Park",
        category: "Wellness"
    },
    {
        id: 6,
        title: "Tea Ceremonies and Traditions",
        excerpt: "Immerse yourself in the meditative practice of traditional tea ceremonies across Asia's most serene destinations...",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
        date: "February 20, 2024",
        author: "Maya Patel",
        category: "Culture"
    }
];

export default Blog;