import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
 const auth = getAuth(app);

 const Provider = new GoogleAuthProvider();
 
const AuthProvider = ({children}) => {
    const [user, setUser]  = useState(null);
    const [loder, setLoder] = useState(true);


    //createUser start
    const createUser = (email, password) => {
        setLoder(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //createUser end

    //singIn start    
    const singIn = (email, password) => {
        setLoder(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //singIn end
    
    //logout start 
    const logOut = () => {
        return signOut(auth)
    }
    //logout end
    
    //Social media start
    const googleSingIn = () => {
        setLoder(true);
        return signInWithPopup(auth, Provider);
    }
    //Social media end

    const updateUserProfile = (name , photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
          
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
        updateUserProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;