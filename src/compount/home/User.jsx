import {getAuth,signOut} from "firebase/auth"


function User(){

    const logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    }
   

    
    return(
<>
<div className="w-full h-96 bg-white text-black">

<button onClick={logout}> logout</button>
</div>

</>
    )
}
export default User