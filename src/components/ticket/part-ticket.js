import React from 'react';

export default ({first, second}) => {
    

    return (
    <div className = "part">
        <div className="header">
            {first}
        </div>
        <div>
            {second}
        </div>
    </div>);
}