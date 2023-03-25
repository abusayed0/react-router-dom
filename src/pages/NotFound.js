import React from 'react';
import { Link,} from 'react-router-dom';

const NotFound = () => {
    
    return (
        <div className="not-found">
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, vero.</p>
            <p>Go to the <Link to="/">HomePage</Link></p>
        </div>
    );
};

export default NotFound;