import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCompass, FaBookOpen, FaCamera, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/80 to-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3"
                    >
                        <Link to="/" className="flex items-center">
                            <span
                                className={`text-2xl font-bold ${
                                    isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                            >
                                Zen Travel
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={link.path}
                                {...link}
                                isScrolled={isScrolled}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <MobileNavLink
                                    key={link.path}
                                    {...link}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({ path, label, icon: Icon, isScrolled, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
    >
        <Link
            to={path}
            className={`flex items-center space-x-2 text-lg font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-300'
            }`}
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </Link>
    </motion.div>
);

const MobileNavLink = ({ path, label, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay }}
    >
        <Link
            to={path}
            className="flex items-center space-x-3 text-lg text-gray-800 hover:text-blue-500 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </Link>
    </motion.div>
);

const navLinks = [
    { path: '/', label: 'Home', icon: FaCompass },
    { path: '/destinations', label: 'Destinations', icon: FaCompass },
    { path: '/blog', label: 'Blog', icon: FaBookOpen },
    { path: '/gallery', label: 'Gallery', icon: FaCamera },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contact', label: 'Contact', icon: FaEnvelope }
];

export default Navbar;
