import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-neutral text-black border-0">{children}</button>
    );
};

export default PrimaryButton;