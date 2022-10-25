import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider/ThemeProvider';

const About = () => {
    const { toggleTheme } = useContext(ThemeContext);
    console.log(toggleTheme);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={toggleTheme} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;