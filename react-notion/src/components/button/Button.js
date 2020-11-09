import React from 'react';
import './Button.scss';

const Button = ({ text, textColor = '#444', onClickFunc }) => {
    return (
        <div>
            <span className="button" style={{ color: textColor }} onClick={onClickFunc}>
                {text}
            </span>
        </div>
    );
};

export default Button;