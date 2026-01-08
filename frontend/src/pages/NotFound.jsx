import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found__content">
                    <span className="not-found__code">404</span>
                    <h1 className="not-found__title">Page Not Found</h1>
                    <p className="not-found__text">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
