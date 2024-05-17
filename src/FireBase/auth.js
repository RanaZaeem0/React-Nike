// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyC33PSGy1RgyGo8QoHxlKvXm5Eid9hc40A",
  authDomain: "nike-2b0c5.firebaseapp.com",
  projectId: "nike-2b0c5",
  storageBucket: "nike-2b0c5.appspot.com",
  messagingSenderId: "905510102495",
  appId: "1:905510102495:web:44254cfc34eb894de6506a",
  measurementId: "G-BNXPDC3XER"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle  = ( )=>  {

    signInWithPopup(auth,provider).then((userData)=>{
        const name =   userData.user.email
       const email =   userData.user.displayName
       const  emialPhoto =    userData.user.photoURL
       localStorage.setItem("email" , email)
      localStorage.setItem("name", name )
      localStorage.setItem("emialPhoto", emialPhoto)


          }).catch(error => console.log(error))
      
}
