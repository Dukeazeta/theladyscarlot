import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeToggle.css';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
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

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
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
export function ThemeSwitch({ theme: propTheme, toggleTheme: propToggleTheme }) {
    const { theme: contextTheme, toggleTheme: contextToggleTheme } = useTheme();

    // Use props if provided (for backward compatibility), otherwise use context
    const currentTheme = propTheme || contextTheme;
    const currentToggle = propToggleTheme || contextToggleTheme;

    return (
        <div className="theme-switch">
            <span className="theme-switch__label">
                {currentTheme === 'dark' ? 'Midnight Mode' : 'Champagne Mode'}
            </span>
            <button
                className="theme-toggle__btn"
                onClick={currentToggle}
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTheme}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="theme-toggle__icon"
                    >
                        {currentTheme === 'dark' ? <HiSun /> : <HiMoon />}
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
}
