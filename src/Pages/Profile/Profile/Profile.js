import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, verifyEmail, notify } = useContext(AuthContext);
    const { displayName, photoURL, email, emailVerified } = user;

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
                notify('Email varified link send to your email.')
            })
            .catch(error => console.error(error.message))
    }

    return (
        <div className='container mx-auto p-5 my-10'>
            <h2 className='lg:text-5xl text-3xl text-center font-bold mb-5 pb-5'>Profile</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl border max-w-5xl mx-auto">
                <figure className='overflow-hidden w-full lg:max-w-[300px]'><img className='w-full rounded' src={photoURL} alt="user avatar" /></figure>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" defaultValue={email ? email : 'no value'} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={displayName ? displayName : 'no value'} className="input input-bordered" />
                    </div>
                    <p>Email varified: <strong>{emailVerified ? 'Varified' : `Not Varified yet`} {emailVerified || <button onClick={handleVerifyEmail} className='btn btn-sm'>Varified Now</button>}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;