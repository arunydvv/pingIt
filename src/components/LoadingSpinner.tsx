import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="h-16 w-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
