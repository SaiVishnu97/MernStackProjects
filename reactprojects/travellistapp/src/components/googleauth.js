import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { myAuth,myProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
export function Googleauth(props)
{
    const navigate=useNavigate()
    function login()
    {
        // Logic to display the popup will all gmails id's
        signInWithPopup(myAuth, myProvider)
        .then(function()
        {
            // Logic to extract Username and Email ID
            let username = myAuth.currentUser.displayName
            let email = myAuth.currentUser.email

            console.log(username, email)
            props.setisLoggedIn(true)
            props.setusername(username)
            // Navigate to Home Page(/home)
            navigate("/home")
            // useNavigate("/home")
            
        })
        .catch(function(error)
        {
            console.log(error)
        })

    }
  return (
    <div>
        <button style={{width: "30%"}} onClick={login}>Continue with Google</button>
    </div>)
}