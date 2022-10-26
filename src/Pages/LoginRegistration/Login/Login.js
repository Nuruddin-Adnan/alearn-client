import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 border-b">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-2">Login now!</h1>
                        <p>Welcome to the best learning platform</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#forgot" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='grid md:grid-cols-3 gap-3 text-center'>
                                <button className="btn btn-outline">Google</button>
                                <button className="btn btn-outline">Github</button>
                                <button className="btn btn-outline">Facebook</button>
                            </div>
                            <p className='text-sm text-center mt-2'>Don't have an account? <Link className='font-bold underline hover:text-secondary-500' to='/registration'>Register Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;