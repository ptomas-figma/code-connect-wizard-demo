import React, { useState } from 'react';

interface CheckboxProps {
    label?: string;
    isInvalid?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label = 'Check me!', isInvalid = false }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div style={{ color: isInvalid ? 'red' : 'inherit' }}>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    aria-invalid={isInvalid}
                />
                {label}
            </label>
        </div>
    );
};

export { Checkbox };