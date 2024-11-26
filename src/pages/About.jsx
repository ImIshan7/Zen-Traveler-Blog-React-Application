import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PageHeader } from '../components/shared/PageHeader';
import { FaHeart, FaCompass, FaCamera, FaUsers } from 'react-icons/fa';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen">
            <PageHeader
                title=""
                subtitle=""
                image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
            />

            <section ref={ref} className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="prose prose-lg mx-auto"
                    >
                        <h2 className="text-3xl font-serif text-center mb-8">Our Story</h2>
                        <p className="mb-6">
                            Zen Travel was born from a passion for mindful exploration and the belief that travel can be a transformative experience. We seek out destinations that offer not just beautiful sights, but opportunities for personal growth and inner peace.
                        </p>
                        <p className="mb-6">
                            Our mission is to guide fellow travelers to places where they can find tranquility, connect with local cultures, and create meaningful memories that last a lifetime.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-zen-light">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-16">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Value key={index} {...value} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const TeamMember = ({ name, role, image, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="text-center"
    >
        <div className="relative w-48 h-48 mx-auto mb-6">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
        <h3 className="text-xl font-serif mb-2">{name}</h3>
        <p className="text-zen-primary mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const Value = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="text-center"
    >
        <div className="text-4xl text-zen-primary mb-4 flex justify-center">
            <Icon />
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const teamMembers = [
    {
        name: "Sarah Chen",
        role: "Founder & Travel Expert",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        description: "Passionate about discovering hidden gems and sharing authentic travel experiences."
    },
    {
        name: "David Park",
        role: "Head of Photography",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        description: "Capturing the beauty of destinations through his unique lens."
    },
    {
        name: "Maya Patel",
        role: "Cultural Expert",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        description: "Specializing in authentic cultural experiences and local connections."
    }
];

const values = [
    {
        icon: FaHeart,
        title: "Mindful Travel",
        description: "We believe in responsible and conscious exploration."
    },
    {
        icon: FaCompass,
        title: "Adventure",
        description: "Seeking unique experiences off the beaten path."
    },
    {
        icon: FaCamera,
        title: "Storytelling",
        description: "Sharing authentic stories through photography and words."
    },
    {
        icon: FaUsers,
        title: "Community",
        description: "Building connections with travelers and locals alike."
    }
];

export default About;