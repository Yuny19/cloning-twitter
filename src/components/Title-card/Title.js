import React from 'react';

import './title.css';

function Title({textTitle}) {
    return (
        <div>
            <h2 className="title">{textTitle}</h2>
        </div>
    )
}

export default Title
