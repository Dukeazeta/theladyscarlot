import './LegalPage.css';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export default function LegalLayout({ title, children }) {
    return (
        <div className="legal-page">
            <header className="legal-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <HiArrowLeft />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </header>

            <main className="legal-main container">
                <motion.article
                    className="legal-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="legal-title">{title}</h1>
                    <div className="legal-body">
                        {children}
                    </div>
                </motion.article>
            </main>

            <footer className="legal-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} The Lady's Car Lot. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
