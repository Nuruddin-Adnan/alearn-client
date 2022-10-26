import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="hero min-h-screen w-full max-w-full bg-base-200 border-b">
                <div className="hero-content w-full max-w-lg flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-2">Register now!</h1>
                        <p>Welcome to Alearn, the best learning platform </p>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-sm text-center mt-2'>Already have an account? <Link className='font-bold underline hover:text-secondary-500' to='/login'>Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Registration;