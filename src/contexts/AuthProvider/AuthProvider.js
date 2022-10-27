import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser || currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    // resistration successull and email varification toast message
    const notify = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const authInfo = {
        user,
        loading,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        verifyEmail,
        notify
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;