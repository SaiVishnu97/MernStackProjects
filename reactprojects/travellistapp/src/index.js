import {render} from 'react-dom'
import './Styles/App.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom"
import { Mainpage } from './mainpage.js'
import { Googleauth } from './components/googleauth.js'
import { useState } from 'react'
export function App()
{
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const [username,setusername]=useState("")
    function pleaseLogout()
    {
        setisLoggedIn(false)
        window.location.pathname = "/login"

    }
    return(
        <div>
            <BrowserRouter>
            {isLoggedIn?<div><Link to="/home">Home</Link> <button style={{width: "15%"}} onClick={pleaseLogout}>Logout</button></div> : <Link to="/login" style={{color:"red"}}>Login</Link>}
            <Routes>
            <Route path='/login' element={<Googleauth setisLoggedIn={setisLoggedIn} setusername={setusername}/>}>
            </Route>
            <Route path='/home' element={isLoggedIn&&<Mainpage username={username}/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

render(<App/>,document.querySelector("#root"))