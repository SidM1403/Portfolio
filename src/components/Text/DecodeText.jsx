import React from 'react';

const DecodeText = ({ text, className = '' }) => {
    return <span className={`font-cyber ${className}`}>{text}</span>;
};

export default DecodeText;
