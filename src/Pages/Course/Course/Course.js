import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const Course = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-12 p-10 gap-5">
                <div className='lg:col-span-3 col-span-12'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-9 col-span-12'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Course;