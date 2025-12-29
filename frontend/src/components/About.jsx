import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import './About.css';

export default function About() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section id="about" className="about section" ref={sectionRef}>
            <motion.div className="about__bg-text" style={{ x }}>A</motion.div>
            <div className="container">
                <div className="about__grid" ref={gridRef}>
                    <motion.div
                        className="about__image-container"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="about__image-decoration" />
                        <div className="about__image-wrapper">
                            <motion.img
                                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80"
                                alt="Luxury details"
                                className="about__image"
                                style={{ y }}
                            />
                            <div className="about__image-overlay" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="about__eyebrow">Our Legacy</span>
                        <h2 className="about__title">
                            Excellence in Every{' '}
                            <span className="text-accent underline">Journey.</span>
                        </h2>

                        <div className="about__body">
                            <p>
                                The Lady's Car Lot is more than just a rental service; it's a
                                commitment to sophistication and safety on the vibrant roads of Lagos.
                            </p>
                            <p>
                                We curate a selection of the world's most prestigious automobiles,
                                ensuring that whether you're heading to a corporate gala or a
                                private celebration, you arrive with undeniable presence.
                            </p>
                        </div>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <span className="about__highlight-icon">✧</span>
                                <h3 className="about__highlight-title">Handpicked</h3>
                                <p className="about__highlight-desc">Meticulously maintained exotic vehicle fleet.</p>
                            </div>
                            <div className="about__highlight">
                                <span className="about__highlight-icon">✧</span>
                                <h3 className="about__highlight-title">Bespoke</h3>
                                <p className="about__highlight-desc">Personalized service tailored to your itinerary.</p>
                            </div>
                            <div className="about__highlight">
                                <span className="about__highlight-icon">✧</span>
                                <h3 className="about__highlight-title">Secure</h3>
                                <p className="about__highlight-desc">Trained professional drivers and escort options.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
