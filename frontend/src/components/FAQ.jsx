import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import './FAQ.css';

const faqs = [
    {
        id: "01",
        question: "Do you charge by the hour for additional time?",
        answer: "Precision is key to our service. We charge per quarter for additional time beyond the initial booking. This ensures you only pay for the exact luxury experience you consume."
    },
    {
        id: "02",
        question: "What kinds of cars do you have for sale and rent?",
        answer: "Our curated selection includes the world's most prestigious automobiles: Mercedes-Benz S-Class & G-Wagons, Bentley, Lexus, and more. We offer both acquisition services and custom rental durations."
    },
    {
        id: "03",
        question: "What are your rental rates?",
        answer: "Luxury is bespoke. Our rates are calculated based on vehicle class, chauffeur requirements, and specific itineraries. Contact our concierge for a tailored quotation that matches your expectations."
    },
    {
        id: "04",
        question: "Is chauffeur service included?",
        answer: "We offer both self-drive and professional chauffeur options. Our drivers are trained in elite hospitality and defensive driving, ensuring your journey is as safe as it is sophisticated."
    }
];

function FAQItem({ faq, isOpen, toggle }) {
    return (
        <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button className="faq__trigger" onClick={toggle} aria-expanded={isOpen}>
                <div className="faq__id">{faq.id}</div>
                <span className="faq__question-text">{faq.question}</span>
                <div className="faq__icon">
                    {isOpen ? <HiMinus /> : <HiPlus />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq__answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="faq__answer">
                            <p>{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openId, setOpenId] = useState("01");
    const sectionRef = useRef(null);

    return (
        <section id="faq" className="faq section" ref={sectionRef}>
            <div className="container">
                <div className="faq__layout">
                    <div className="faq__info">
                        <span className="eyebrow">Assistance</span>
                        <h2 className="faq__title">Common <span className="text-accent underline">Inquiries</span></h2>
                        <p className="faq__subtitle">
                            Everything you need to know about experiencing the pinnacle of mobility with The Lady's Car Lot.
                        </p>
                    </div>

                    <div className="faq__list">
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
