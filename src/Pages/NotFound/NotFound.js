import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center w-full h-screen bg-[#fff300] grid place-items-center">
            <div className='p-5'>
                <img src="https://cdn.jsdelivr.net/gh/ahmedhosna95/upload@1731955f/sad404.svg" alt="not found" className='mx-auto' />
                <h1 className='md:text-8xl text-5xl font-bold'>PAGE 404</h1>
                <p className='md:text-2xl text-xl my-5'>The page you were looking for could not be found</p>
                <Link className='btn btn-wide btn-outline' to='/'>Go to Home </Link>
            </div>
        </div>
    );
};

export default NotFound;