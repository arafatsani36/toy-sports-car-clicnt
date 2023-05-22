import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
 const auth = getAuth(app);

 const Provider = new GoogleAuthProvider();
 
const AuthProvider = ({children}) => {
    const [user, setUser]  = useState(null);
    const [loder, setLoder] = useState(true);
   
    const createUser = (email, password) => {
        setLoder(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoder(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSingIn = () => {
        return signInWithPopup(auth, Provider);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoder(false);
        });
        return () => {
            unSubscribe();
    }
    },[])

       

    const authInfo ={
        user,
        createUser,
        singIn,
        logOut,
        loder,
        googleSingIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;