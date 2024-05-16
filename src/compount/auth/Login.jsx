import Input from "./Input"
import { useForm } from "react-hook-form"
import authServies  from "../../config/auth"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import authservies from "../../config/auth"
import {login as stateLogin} from "../../store/authSlice"
import { useState } from "react"

function Login (){
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
   const [error ,setError] = useState('')
  
  
  
   const loginfn = async (data)=>{
    setError('')
    try {
    const userSession = await authServies.createAccount(data)
    if(userSession){
        const userData = await authservies.getCurrentUser(userSession)
         dispatch(stateLogin(userData))
         navigate('/')
    }
 } catch (error) {
    console.log(`loginpage error ${error}`);
 }   


}



    return(
        <>
        <form onSubmit={handleSubmit(loginfn)}
        className=" w-full h-96 bg-white" >

        <Input 
        {...register("email",{
            require:true
        })
        }
        type={"email"} placeholder={"enter emial"} label={'email'} />
        
        <Input 
        {...register('password',{
            require:true
        })}
        type={"password"} placeholder={"enter password"} />
  <button type='submit'>Craete a account</button>
  </form>
        </>
    )
}

export default Login