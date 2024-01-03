import React from 'react'
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { auth } from './Firebase'
import { useDispatch } from 'react-redux'
import { addusername } from '../redux'
import { useNavigate } from 'react-router-dom'

function Googleauth() {
     
    const provider=new GoogleAuthProvider()
    const navigate=useNavigate()
    provider.setCustomParameters({   
        prompt : "select_account "
    });
     const dispatch=useDispatch()
 const signInWithgoogle=()=>signInWithPopup(auth,provider).then((result)=>{
    
    console.log(result.user)
   const username=result.user.displayName
   localStorage.setItem("UserName", username);
    dispatch(addusername(username))
    navigate("/shoppingmain")
}
)
  return (

   <>
   <div className="text-center mt-5" style={{marginLeft:"100px"}}>
      <button
        type="button"
        className="btn btn-light border-dark"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={signInWithgoogle}
      >
        <img
          src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.18.0/icons/google.svg"
          alt="Google Icon"
          width="24"
          height="24"
          className="mr-2"
        />
        Sign in with Google
      </button>
    </div>
   </>
  )
}

export default Googleauth