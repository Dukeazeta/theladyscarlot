import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi';
import './WhyChooseUs.css';

const reasons = [
    {
        icon: HiOutlineShieldCheck,
        title: 'Verified & Insured',
        description: 'All vehicles fully insured and verified drivers for your peace of mind.',
    },
    {
        icon: HiOutlineClock,
        title: '24/7 Availability',
        description: 'Round-the-clock support and flexible booking times to suit your schedule.',
    },
    {
        icon: HiOutlineUserGroup,
        title: 'Professional Chauffeurs',
        description: 'Experienced, courteous drivers who know Lagos inside and out.',
    },
    {
        icon: HiOutlineSparkles,
        title: 'Immaculate Fleet',
        description: 'Every vehicle meticulously cleaned and maintained to showroom standards.',
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-50px' });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section className="why-choose section" ref={sectionRef}>
            <div className="container">
                <div className="why-choose__grid" ref={gridRef}>
                    <motion.div
                        className="why-choose__content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="eyebrow">Excellence</span>
                        <h2 className="why-choose__title">
                            The Standard of <span className="underline">Luxury</span>
                        </h2>
                        <p className="why-choose__description">
                            We pride ourselves on providing more than just luxury vehicles.
                            We offer a complete mobility experience built on trust,
                            exclusivity, and unwavering professionalism.
                        </p>

                        <div className="why-choose__features">
                            {reasons.map((reason, index) => {
                                const Icon = reason.icon;
                                return (
                                    <motion.div
                                        key={reason.title}
                                        className="why-choose__feature"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="why-choose__feature-icon">
                                            <Icon />
                                        </div>
                                        <div className="why-choose__feature-text">
                                            <h4>{reason.title}</h4>
                                            <p>{reason.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        className="why-choose__visual"
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="why-choose__image-wrapper">
                            <motion.img
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&auto=format&fit=crop&q=80"
                                alt="Luxury car experience"
                                className="why-choose__image"
                                style={{ y }}
                            />
                            <div className="why-choose__image-overlay" />
                        </div>
                        <motion.div
                            className="why-choose__badge"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
                        >
                            <span className="why-choose__badge-number">10+</span>
                            <span className="why-choose__badge-text">Years Excellence</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
