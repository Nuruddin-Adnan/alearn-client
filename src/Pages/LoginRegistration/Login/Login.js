import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { googleSignIn, githubSignIn, facebookSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handleGithubSignIn = () => {
        setError('')
        githubSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handleFacebookSignIn = () => {
        setError('')
        facebookSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 border-b">
                <div className="hero-content w-full max-w-xl flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-2">Login now!</h1>
                        <p>Welcome to the best learning platform</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            {
                                error && <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Error! {error}</span>
                                    </div>
                                </div>
                            }
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#forgot" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className='grid md:grid-cols-3 gap-3 text-center'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-xl font-bold mr-1'></FaGoogle> Google</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline"><FaGithub className='text-xl font-bold mr-1'></FaGithub> Github</button>
                                <button onClick={handleFacebookSignIn} className="btn btn-outline"><FaFacebook className='text-xl font-bold mr-1'></FaFacebook> Facebook</button>
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