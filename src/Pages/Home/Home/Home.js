import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/education-concept-school-supplies-in-a-shopping-cart-on-the-desk-in-picture-id1165486680?b=1&k=20&m=1165486680&s=170667a&w=0&h=gKqgk0N0pS61UlWOu-t6bZpD7n3M0Iyhw2JqZMamk7U=")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-20">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">IMPROVE YOUR SKILLS</h1>
                        <p className="mb-5">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                        <Link to='/course' className="btn btn-primary">All Courses</Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 text-center px-5">
                <div className='max-w-3xl mx-auto'>
                    <h2 className="mb-5 text-3xl font-bold">All Category</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {
                            categories.map(category =>
                                <Link to={`/course/category/${category.categoryName}`} key={category.id} className="card card-compact hover:border-primary border bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"><AiOutlineCheckCircle></AiOutlineCheckCircle> {category.categoryName}</h2>
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <hr />
            </div>
            <div className="container mx-auto my-10">
                <div className="hero max-w-5xl mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://placeimg.com/260/400/arch" alt='premium' className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h2 className="text-5xl font-bold">Get Premium Access!</h2>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;