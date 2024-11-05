import React from 'react';

const Button = ({ disabled, children, variant }) => {
    return (
        <button disabled={disabled} variant={variant}>
            {children}
        </button>
    );
};

export { Button };