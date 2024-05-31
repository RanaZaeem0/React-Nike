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
<div className="w-full h-96 flex items-center justify-center   bg-white text-black">


<button className="
bg-black text-white text-2xl p-10 rounded-xl
" onClick={logout}> logout</button>
</div>

</>
    )
}
export default Logout