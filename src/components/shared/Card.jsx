import { motion } from 'framer-motion';

export const Card = ({ children, className = '', delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
        {children}
    </motion.div>
);

export const ImageCard = ({ image, title, description, category, className = '', delay = 0 }) => (
    <Card className={`group ${className}`} delay={delay}>
        <div className="relative aspect-w-3 aspect-h-4">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6">
                    {category && (
                        <span className="text-zen-accent text-sm font-medium mb-2 inline-block">
              {category}
            </span>
                    )}
                    <h3 className="text-white text-xl font-serif mb-2">{title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{description}</p>
                </div>
            </div>
        </div>
    </Card>
);