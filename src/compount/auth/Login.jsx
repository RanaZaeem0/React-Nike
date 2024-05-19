import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin, logout } from "../../store/authSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { Button, Input, Logo } from "../index";
import Button from "./Button";
import Input from "./Input"
import { useDispatch, useSelector } from "react-redux";
import authService from "../../config/auth";
import { useForm } from "react-hook-form";
import {auth, signInWithGoogle} from "../../FireBase/auth"
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
   const [loginState,setLoginState] = useState()
    const selector = useSelector((state)=> state.auth.status)
 
    const handleGoogleAuth = async ()=>{
signInWithGoogle()
const name =  localStorage.getItem("name")
const email =  localStorage.getItem("email")
const userPhotoUrl = localStorage.getItem("emialPhoto")
const userDetails = [{username: name , useremail :email , userPhoto: userPhotoUrl
}]
if(userDetails) {
   dispatch(authLogin(userDetails))

}
console.log(selector);
    }



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
  navigate('/')
  const name =  user.displayName
const email =  user.email
const userPhotoUrl = user.displayName
  const userDetails = [{username: name , useremail :email , userPhoto: userPhotoUrl
  }]
  dispatch(authLogin(userDetails))
 console.log(selector);
    const uid = user.uid;
    // ...
  } else {
    dispatch(logout())
    console.log(`user is not login`);
    // User is signed out
    // ...
  }
});

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
    //   register ma data dal kar nikal ga or auth.js ma baj da ga
    
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
           
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account{" "}
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          dont have any account
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link></p>
          {
            error && <p className="text-red-900 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)}
            className="mt-9">
          <div className="">
            <Input  
             label = 'email :'
             type="email"
             placeholder ='Enter your email'
             {...register('email',{
                require:true
             })}
            />
             <Input  
             label = 'password :'
             type="password"
             placeholder ='Enter your password'
             {...register('password',{
                require:true
             })}
            />
                          <div class="px-6 sm:px-0 max-w-sm">

    <button onClick={()=>{
      handleGoogleAuth()
    }}
     type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
</div>
                 <Button
                 type='submit'
                 className='w-1/4'
                 >Sign in</Button>
            </div> 
            </form>
      </div>
    </div>
  );
}
// the way from will work
// 1 when u click onsubmit {handleSumbit(login)} 
// 2 handle submit allready have  access of the register and register have accsee of input filed 
// theroy is register give this to handlesubmit and handlesub pass it to login  {emial: expamle.com , "passowrd" : 121321 } 