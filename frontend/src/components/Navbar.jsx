import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useTheme, ThemeSwitch } from './ThemeToggle';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
];

const INSTAGRAM_DM = 'https://ig.me/m/theladyscarlot';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="navbar__container">
                <div className="navbar__col navbar__col--left">
                    <a href="#home" className="navbar__logo">
                        <span className="navbar__logo-text">The Lady's</span>
                        <span className="navbar__logo-accent">Car Lot</span>
                    </a>
                </div>

                <div className="navbar__col navbar__col--center">
                    {/* Desktop Navigation */}
                    <nav className="navbar__nav">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="navbar__link">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="navbar__col navbar__col--right">
                    <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className="navbar__cta btn btn-primary">
                        Book Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="navbar__toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <nav className="navbar__mobile-nav">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="navbar__mobile-link"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                            >
                                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                            </motion.div>

                            <motion.a
                                href={INSTAGRAM_DM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary navbar__mobile-cta"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Book Now
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
