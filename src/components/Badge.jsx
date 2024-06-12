import React from 'react';

const Badge = ({ text, color }) => {
    return (
        <div style={{ backgroundColor: color, padding: '8px', borderRadius: '4px', display: 'inline-block' }}>
            {text}
        </div>
    );
};

export default Badge;