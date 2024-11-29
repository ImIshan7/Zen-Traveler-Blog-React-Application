import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Newsletter from "./home/Newsletter.jsx";

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <footer className="bg-zen-dark text-white">
            {/* Newsletter Section */}
            <Newsletter/>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Zen Travel</h4>
                        <p className="text-gray-400 mb-6">
                            Discover peaceful destinations and mindful travel experiences around the world.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={FaFacebook} />
                            <SocialLink href="#" icon={FaTwitter} />
                            <SocialLink href="#" icon={FaInstagram} />
                            <SocialLink href="#" icon={FaPinterest} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink to="/destinations">Destinations</FooterLink>
                            <FooterLink to="/blog">Blog</FooterLink>
                            <FooterLink to="/gallery">Gallery</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                                <FaMapMarkerAlt className="mr-3" />
                                123 Zen Street, Peace City
                            </li>
                            <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                                <FaEnvelope className="mr-3" />
                                hello@zentravel.com
                            </li>
                            <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                                <FaPhone className="mr-3" />
                                +1 (555) 123-4567
                            </li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h4 className="text-xl font-serif mb-6">Recent Posts</h4>
                        <ul className="space-y-4">
                            {recentPosts.map((post, index) => (
                                <li key={index}>
                                    <Link to="/blog" className="group">
                                        <h5 className="text-gray-300 group-hover:text-white transition-colors">
                                            {post.title}
                                        </h5>
                                        <p className="text-sm text-gray-400">{post.date}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Zen Travel. Made with{' '}
                        <FaHeart className="inline-block text-zen-secondary mx-1" /> by{' '}
                        <a href="#" className="text-white hover:text-zen-secondary transition-colors">
                            Zen Team
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zen-secondary transition-colors"
    >
        <Icon className="w-5 h-5" />
    </a>
);

const FooterLink = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="text-gray-400 hover:text-white transition-colors inline-block"
        >
            {children}
        </Link>
    </li>
);

const recentPosts = [
    {
        title: "Finding Peace in Japanese Gardens",
        date: "March 15, 2024"
    },
    {
        title: "Meditation Retreats in the Himalayas",
        date: "March 10, 2024"
    },
    {
        title: "Sacred Temples of Bali",
        date: "March 5, 2024"
    }
];

export default Footer;