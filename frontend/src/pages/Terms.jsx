import LegalLayout from '../components/LegalLayout';

export default function Terms() {
    return (
        <LegalLayout title="Terms and Conditions">
            <div className="legal-section">
                <h2>1. Reservation Procedure</h2>
                <p>Reservations must be made at least 2 hours prior to the proposed pick-up time. Clients can choose either a 12-hour or 24-hour booking option. The 12-hour booking ends after 12 hours, and any additional hours will incur a surcharge.</p>
            </div>

            <div className="legal-section">
                <h2>2. Permitted Zones</h2>
                <p>There may be restrictions when driving the rental car to another state. Hence, it is necessary to inform our contact center at the time of booking if this is intended. Certain areas within Lagos incur additional charges as they are considered outskirts by the company.</p>
            </div>

            <div className="legal-section">
                <h2>3. Delayed Payments</h2>
                <p>Late payment affects driver arrival times. The Lady is not responsible for delays if payment is made less than 2 hours before the scheduled arrival, depending on the client's location.</p>
            </div>

            <div className="legal-section">
                <h2>4. Overtime Fee</h2>
                <p>An extra time charge of 15,000 Naira per hour will be charged after 12 hours. For some vehicles, the overtime rate is higher.</p>
            </div>

            <div className="legal-section">
                <h2>5. Security Provisions</h2>
                <p>Security arrangements for the booking come at an additional cost for the rental period.</p>
            </div>

            <div className="legal-section">
                <h2>6. Airport Transfer</h2>
                <p>Clients are responsible for covering the costs associated with pickups and drop-offs at airports.</p>
            </div>

            <div className="legal-section">
                <h2>7. Governing Law</h2>
                <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
            </div>
        </LegalLayout>
    );
}
