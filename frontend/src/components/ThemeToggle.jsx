import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeToggle.css';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return { theme, toggleTheme, setTheme };
}

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle">
            <motion.button
                className="theme-toggle__btn"
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="theme-toggle__icon"
                    >
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

// Mobile Switch Component
export function ThemeSwitch({ theme, toggleTheme }) {
    return (
        <div className="theme-switch">
            <span className="theme-switch__label">
                {theme === 'dark' ? 'Midnight Mode' : 'Champagne Mode'}
            </span>
            <button
                className="theme-toggle__btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="theme-toggle__icon"
                    >
                        {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
}
