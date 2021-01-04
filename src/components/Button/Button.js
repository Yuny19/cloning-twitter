import React from 'react';
import './button.css';

function Button({type, text, classname}) {
    return (
        <div>
            <button 
                className={"btn-default "+classname}
                type={type}>{text}</button>
        </div>
    )
};

export default Button;
