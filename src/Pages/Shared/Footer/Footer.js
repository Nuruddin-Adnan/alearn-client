import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://alearn-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <footer className='bg-base-200 text-base-content'>
            <footer className="container mx-auto footer p-10">
                <div>
                    <img src={logo} alt="logo" className='w-12' />
                    <p>ALEARN Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Category</span>
                    {
                        categories.map(category => <Link key={category.id} to='/' className="link link-hover">{category.categoryName}</Link>)
                    }
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;