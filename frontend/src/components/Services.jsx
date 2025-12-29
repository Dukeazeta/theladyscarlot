import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { HiOutlineCalendar, HiOutlineBriefcase, HiOutlineGlobe, HiOutlineKey } from 'react-icons/hi';
import './Services.css';

const services = [
    {
        icon: HiOutlineCalendar,
        title: 'Weddings & Events',
        description: 'Make your special day unforgettable with our stunning wedding cars and event transport solutions.',
    },
    {
        icon: HiOutlineBriefcase,
        title: 'Corporate Hire',
        description: 'Impress clients and executives with premium chauffeur-driven vehicles for business occasions.',
    },
    {
        icon: HiOutlineGlobe,
        title: 'Airport Transfers',
        description: 'Arrive at or depart from Lagos airports in comfort and style with our reliable transfer service.',
    },
    {
        icon: HiOutlineKey,
        title: 'Self-Drive Rentals',
        description: 'Take the wheel yourself with our flexible self-drive options for daily, weekly, or monthly rentals.',
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section id="services" className="services section">
            <div className="container">
                <motion.div
                    className="services__header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow">Solutions</span>
                    <h2 className="services__title">Our <span className="underline">Services</span></h2>
                    <p className="services__subtitle">
                        Comprehensive luxury mobility solutions tailored for every occasion.
                    </p>
                </motion.div>

                <div className="services__grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className="services__card"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="services__card-icon">
                                    <Icon />
                                </div>
                                <h3 className="services__card-title">{service.title}</h3>
                                <p className="services__card-description">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
