import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="error">
            <h2>Error happened!!</h2>
            <p>{error.message}</p>
            <p>Go to the <Link to="/">HomePage</Link></p>
            
        </div>
    );
};

export default Error;