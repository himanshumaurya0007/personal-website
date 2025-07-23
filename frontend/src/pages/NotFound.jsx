import React from 'react';
import { useNavigate } from 'react-router';

function NotFound() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-text-primary px-4 text-center">
            <h1 className="text-6xl font-extrabold text-accent-secondary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-lg text-text-secondary mb-6 max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <button
                onClick={handleRedirect}
                className="px-6 py-2 bg-accent-primary text-white rounded-full hover:bg-accent-secondary transition duration-300"
            >
                Go to Home
            </button>
        </div>
    );
}

export default NotFound;
