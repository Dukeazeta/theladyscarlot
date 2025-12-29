import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import './Footer.css';

const INSTAGRAM = 'https://instagram.com/theladyscarlot';
const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: FaInstagram, href: INSTAGRAM, label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/2341234567890', label: 'WhatsApp' },
];

export default function Footer() {
    const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" ref={footerRef}>
            <motion.div className="footer__large-text" style={{ x }}>SCARLOT</motion.div>
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <motion.div
                        className="footer__brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-text">The Lady's</span>
                            <span className="footer__logo-accent">Car Lot</span>
                        </a>
                        <p className="footer__tagline">
                            Lagos' premier luxury car rental service.
                            Arrive in style, drive the extraordinary.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer__social-link"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="footer__section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h4 className="footer__section-title">Navigation</h4>
                        <nav className="footer__nav">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="footer__link">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="footer__section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="footer__section-title">Connectivity</h4>
                        <div className="footer__contact">
                            <div className="footer__contact-item">
                                <HiLocationMarker />
                                <span>Lagos, Nigeria</span>
                            </div>
                            <div className="footer__contact-item">
                                <HiPhone />
                                <span>+234 123 456 7890</span>
                            </div>
                            <div className="footer__contact-item">
                                <HiMail />
                                <span>hello@theladyscarlot.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="footer__section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h4 className="footer__section-title">Concierge</h4>
                        <p className="footer__cta-text">
                            Experience the pinnacle of luxury. Inquire for bespoke arrangements.
                        </p>
                        <a
                            href={INSTAGRAM_DM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm footer__cta-btn"
                        >
                            Open Concierge
                        </a>
                    </motion.div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} The Lady's Car Lot. Crafted for Excellence.
                    </p>
                    <div className="footer__legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
