import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export const PageHeader = ({ title, subtitle, image }) => (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="background"
        strength={300}
        className="h-[60vh] md:h-[75vh] lg:h-[85vh] relative"
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[3px]" />

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6"
            >
                {/* Decorative Tagline */}
               {/* <span className="inline-block px-5 py-2 bg-zen-accent/90 backdrop-blur-md text-zen-dark rounded-full text-sm md:text-base font-medium tracking-wide shadow-lg">
                    Tranquility Awaits
                </span>*/}

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white leading-tight drop-shadow-md">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                        {subtitle}
                    </p>
                )}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-10 sm:bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>
        </div>
    </Parallax>
);
