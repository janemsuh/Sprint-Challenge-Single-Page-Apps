import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='Navigation'>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/characters'>List of Characters</Link>
                </div>
                <div>
                    <Link to='/episodes'>List of Episodes</Link>
                </div>
                <div>
                    <Link to='/locations'>List of Locations</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;