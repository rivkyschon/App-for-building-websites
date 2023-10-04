import React from 'react';
import './alert.css'

const Alert = ({ success, msg }) => {
    return (
        <div className={`${success ? 'success' : 'error'} alert`}>
            <div className="alert-body">
                {msg}
            </div>
        </div>

    );
};

export default Alert;