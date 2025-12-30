import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Fleet from '../components/Fleet';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

import Footer from '../components/Footer';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Fleet />
                <Services />
                <FAQ />
                <WhyChooseUs />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
