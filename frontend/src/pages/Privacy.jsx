import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
    return (
        <LegalLayout title="Privacy Policy">
            <p className="intro">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="legal-section">
                <h2>1. Information We Collect</h2>
                <p>To provide our elite car rental services, we collect personal information including your name, contact details, identification documents, and booking preferences.</p>
            </div>

            <div className="legal-section">
                <h2>2. How We Use Your Information</h2>
                <p>We use your data strictly for processing reservations, verifying identity for security purposes, and communicating details regarding your luxury mobility experience.</p>
            </div>

            <div className="legal-section">
                <h2>3. Data Protection</h2>
                <p>The Lady's Car Lot implements industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>
            </div>

            <div className="legal-section">
                <h2>4. Third-Party Sharing</h2>
                <p>We do not sell your personal information. Data may only be shared with verified partners (such as security services or insurance providers) specifically when required for your booking.</p>
            </div>

            <div className="legal-section">
                <h2>5. Contact Us</h2>
                <p>For any inquiries regarding your privacy or data usage, please contact our concierge via the provided official channels.</p>
            </div>
        </LegalLayout>
    );
}
