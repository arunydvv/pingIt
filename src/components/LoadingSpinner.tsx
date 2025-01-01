import React from 'react';

const LoadingSpinner: React.FC<{ size: number }> = ({ size }) => {
    return (

            <div className= {`size-${size} border-4 border-t-transparent border-blue-500 rounded-full animate-spin`}></div>
        
    );
};

export default LoadingSpinner;

