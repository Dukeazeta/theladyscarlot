import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './CTA.css';

const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';
const WHATSAPP = 'https://wa.me/2341234567890'; // Update with actual number

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section id="contact" className="cta section">
            {/* Background removed as requested */}

            <div className="container">
                <motion.div
                    className="cta__content"
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="cta__eyebrow">The Next Step</span>
                    <h2 className="cta__title">
                        Command the <span className="underline">Road.</span>
                    </h2>
                    <p className="cta__description">
                        Ready to elevate your experience? Our fleet is waiting.
                        Instant confirmation via our social channels.
                    </p>

                    <div className="cta__buttons">
                        <a
                            href={INSTAGRAM_DM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn cta__btn cta__btn--ig"
                        >
                            <FaInstagram size={20} />
                            <span>Instagram DM</span>
                            <HiArrowRight />
                        </a>
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn cta__btn cta__btn--wa"
                        >
                            <FaWhatsapp size={20} />
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>

                    <div className="cta__footer">
                        <div className="cta__stat">Instant Response</div>
                        <div className="cta__stat">Verified Fleet</div>
                        <div className="cta__stat">VIP Service</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
