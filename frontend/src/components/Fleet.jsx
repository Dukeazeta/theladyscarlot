import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import './Fleet.css';

const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';

const vehicles = [
    {
        id: 1,
        name: 'Mercedes-Benz S-Class',
        category: 'Luxury Sedan',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=80',
        features: ['Chauffeur Available', 'Premium Interior'],
    },
    {
        id: 2,
        name: 'Range Rover Autobiography',
        category: 'Luxury SUV',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&auto=format&fit=crop&q=80',
        features: ['Self-Drive', '4x4 Capability'],
    },
    {
        id: 3,
        name: 'Porsche 911 Carrera',
        category: 'Sports Car',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f373f?w=600&auto=format&fit=crop&q=80',
        features: ['Performance', 'Convertible'],
    },
    {
        id: 4,
        name: 'Bentley Continental GT',
        category: 'Grand Tourer',
        image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&auto=format&fit=crop&q=80',
        features: ['Ultimate Luxury', 'Handcrafted'],
    },
    {
        id: 5,
        name: 'BMW 7 Series',
        category: 'Executive Sedan',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&auto=format&fit=crop&q=80',
        features: ['Executive Class', 'Tech Forward'],
    },
    {
        id: 6,
        name: 'Rolls-Royce Ghost',
        category: 'Ultra Luxury',
        image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=600&auto=format&fit=crop&q=80',
        features: ['Bespoke', 'Whisper Quiet'],
    },
];

function FleetCard({ vehicle, index, isInView }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={cardRef}
            className="fleet__card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                className="fleet__card-image-link"
            >
                <div className="fleet__card-image">
                    <motion.img
                        src={vehicle.image}
                        alt={vehicle.name}
                        style={{ y, scale: 1.2 }}
                    />
                    <div className="fleet__card-overlay" />
                </div>

                <div className="fleet__card-content">
                    <span className="fleet__card-category">{vehicle.category}</span>
                    <h3 className="fleet__card-name">{vehicle.name}</h3>

                    <div className="fleet__card-details">
                        <div className="fleet__card-features">
                            {vehicle.features.map((feature) => (
                                <span key={feature} className="fleet__card-feature">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="fleet__card-cta">
                        <span>Secure Booking</span>
                        <HiArrowRight />
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export default function Fleet() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

    return (
        <section id="fleet" className="fleet section" ref={sectionRef}>
            <div className="container">
                <motion.div
                    className="fleet__header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow">The Collection</span>
                    <h2 className="fleet__title">
                        Legendary <span className="underline">Fleet</span>
                    </h2>
                    <p className="fleet__subtitle">
                        An curated selection of high-performance automobiles for the discerning traveler.
                    </p>
                </motion.div>

                <div className="fleet__grid">
                    {vehicles.map((vehicle, index) => (
                        <FleetCard
                            key={vehicle.id}
                            vehicle={vehicle}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                <motion.div
                    className="fleet__more"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    <div className="fleet__more-line" />
                    <a
                        href={INSTAGRAM_DM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        View Full Collection
                    </a>
                    <div className="fleet__more-line" />
                </motion.div>
            </div>
        </section>
    );
}
