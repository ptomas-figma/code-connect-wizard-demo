import React from 'react';

interface CheckboxGroupProps {
    isInvalid?: boolean;
    children: React.ReactNode;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ isInvalid = false, children }) => {
    return (
        <div
            role="group"
            aria-invalid={isInvalid}
            style={{
                border: isInvalid ? '1px solid red' : '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px'
            }}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { isInvalid } as any);
                }
                return child;
            })}
        </div>
    );
};

export { CheckboxGroup };
