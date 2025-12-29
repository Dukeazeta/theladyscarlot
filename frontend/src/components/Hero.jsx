import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HiArrowRight } from 'react-icons/hi';
import './Hero.css';

const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section id="home" className="hero" ref={containerRef}>
            <div className="hero__bg">
                <div className="hero__gradient" />
                <div className="hero__gradient-2" />
            </div>

            <div className="hero__content container">
                <div className="hero__text">
                    <motion.div
                        className="hero__eyebrow"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero__eyebrow-line" />
                        <span className="eyebrow">The Ultimate Car Rental</span>
                    </motion.div>

                    <h1 className="hero__title">
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Elegance
                        </motion.span>
                        <motion.span
                            className="outline"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Redefined
                        </motion.span>
                    </h1>

                    <motion.p
                        className="hero__description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Master the roads of Lagos with our curated collection of luxury automobiles.
                        Exceptional vehicles, professional service, unforgettable journeys.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a href="#fleet" className="btn btn-primary hero__cta">
                            Explore Fleet
                        </a>
                        <a
                            href={INSTAGRAM_DM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__secondary-cta"
                        >
                            Book a Ride
                            <HiArrowRight />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero__image-wrapper">
                        <motion.img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=90"
                            alt="Luxury Porsche"
                            className="hero__main-image"
                            style={{ y }}
                        />
                        <div className="hero__image-overlay" />
                    </div>

                    <motion.div
                        className="hero__floating-stats"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="hero__stat-pill">
                            <span className="hero__stat-number">50+</span>
                            <span className="hero__stat-text">Exotic Models</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ opacity }}
                transition={{ delay: 1.2 }}
            >
                <span className="hero__scroll-text">Scroll to explore</span>
                <div className="hero__scroll-bar" />
            </motion.div>
        </section>
    );
}
