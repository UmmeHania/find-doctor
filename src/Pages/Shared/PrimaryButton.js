import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary px-12">{children}</button>
    );
};

export default PrimaryButton;