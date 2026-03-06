import React from 'react';

const FluidContainer = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto max-w-screen-2xl px-s-40 md:px-s-80 lg:px-s-120 ${className}`}>
            {children}
        </div>
    );
};

export default FluidContainer;
