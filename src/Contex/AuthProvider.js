import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const porvider = new GoogleAuthProvider();

export const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (upUser) => {
        return updateProfile(auth.currentUser, upUser)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, porvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () =>  unSubscribe();
    }, [])

    const authInfo = {signup, loginUser, logOut, updateUser, googleSignUp, user, loading}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;