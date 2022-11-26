import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center pt-20 bg-slate-100 h-screen'>
            <img className='w-1/4 mx-auto' src="https://i.ibb.co/MBkSKzW/errorpage.png" alt="Error" />
            <h3>This page is not found!</h3>
            <Link className="btn my-5" to='/'>GO TO HOME</Link>
        </div>
    );
};

export default Error;