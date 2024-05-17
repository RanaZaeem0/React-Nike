import {getAuth,signOut} from "firebase/auth"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout} from "../../store/authSlice"

function Logout(){
const dispatch = useDispatch()
const navigate = useNavigate()
const selector  = useSelector(state => state.auth.status)
    const logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
  console.log(selector)

        }).catch((error) => {
          // An error happened.
        });
    }
   

    
    return(
<>
<div className="w-full h-96  bg-white text-black">

<button onClick={logout}> logout</button>
</div>

</>
    )
}
export default Logout