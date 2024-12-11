import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "../context"
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";


function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const singin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const singOutUser = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user)

      } else {
        console.log("user is logged out");
        setUser(null)

      }
    });
    return () => {
      unsubscrib;
    }
  }, [])

  const google = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const github = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    user,
    creatUser,
    singin,
    singOutUser,
    google,
    github
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider