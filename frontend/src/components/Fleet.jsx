import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import './Fleet.css';
import bentleyImg from '../assets/Fleet/Bentley.webp';
import lexusImg from '../assets/Fleet/Lexus LX500.webp';
import gwagonImg from '../assets/Fleet/Mercedes G-Wagon.webp';
import gleImg from '../assets/Fleet/Mercedes GLE.webp';
import s580Img from '../assets/Fleet/Mercedes S580.webp';
import landcruiserImg from '../assets/Fleet/Toyota LandCruiser.webp';

const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';

const vehicles = [
    {
        id: 1,
        name: 'Mercedes-Benz S580',
        category: 'Luxury Sedan',
        image: s580Img,
        features: ['Executive Comfort', 'V8 Powerhouse'],
    },
    {
        id: 2,
        name: 'Mercedes-Benz G-Wagon',
        category: 'Luxury SUV',
        image: gwagonImg,
        features: ['Iconic Presence', 'Ultimate Style'],
    },
    {
        id: 3,
        name: 'Bentley Continental',
        category: 'Grand Tourer',
        image: bentleyImg,
        features: ['Pure Elegance', 'Handcrafted Luxury'],
    },
    {
        id: 4,
        name: 'Lexus LX500',
        category: 'Premium SUV',
        image: lexusImg,
        features: ['Refined Strength', 'Chauffeur Top Choice'],
    },
    {
        id: 5,
        name: 'Mercedes-Benz GLE',
        category: 'Executive SUV',
        image: gleImg,
        features: ['Versatile Luxury', 'Modern Tech'],
    },
    {
        id: 6,
        name: 'Toyota LandCruiser 300',
        category: 'Premium SUV',
        image: landcruiserImg,
        features: ['King of Roads', 'Executive Edition'],
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
                        loading="lazy"
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
                        A curated selection of high-performance automobiles for the discerning traveler.
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
