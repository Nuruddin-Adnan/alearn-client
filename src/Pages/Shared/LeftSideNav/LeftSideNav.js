import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://alearn-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='sticky top-0'>
            <ul className="menu bg-base-100 w-full card border">
                <li className='text-xl border-b p-4 font-semibold'>CATEGORIES</li>
                {
                    categories.map(category => <li className='border-b text-sky-500' key={category.id}><NavLink to={`/course/category/${category.categoryName}`}>{category.categoryName}</NavLink></li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideNav;