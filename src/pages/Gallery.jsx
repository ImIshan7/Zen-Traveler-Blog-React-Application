import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import Gallery from '../components/shared/Gallery';

const GalleryPage = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title=""
                subtitle=""
                image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
            />

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-serif text-center mb-16"
                    >
                        Featured Destinations
                    </motion.h2>

                    <Gallery images={galleryImages} />
                </div>
            </section>
        </div>
    );
};

const galleryImages = [
    // Japan
    {
        url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
        title: "Kyoto Temple Gardens"
    },
    {
        url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80",
        title: "Mount Fuji at Sunrise"
    },
    {
        url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        title: "Tokyo Cityscape"
    },
    // Nepal
    {
        url: "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80",
        title: "Himalayan Peaks"
    },
    {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        title: "Pokhara Lake"
    },
    {
        url: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=800&q=80",
        title: "Buddhist Temple"
    },
    // Bali
    {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        title: "Rice Terraces of Ubud"
    },
    {
        url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        title: "Uluwatu Temple"
    },
    {
        url: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
        title: "Nusa Penida Coastline"
    }
];

export default GalleryPage;