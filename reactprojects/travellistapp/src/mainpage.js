
import { useState ,useEffect } from 'react'
import './Styles/App.css'
import { Items } from './components/items'
import { database } from "./components/firebase.js"
export function Mainpage(props)
{
    const [itemval,setItemval]=useState("")
    const [itemcount,setItemcount]=useState(1)
    const [fullarray,setfullarray]=useState([])
    useEffect(function ()
    {
        database.collection('tripdata').onSnapshot(function(snapshotevent){setfullarray(snapshotevent.docs.map((i)=>i.data().itemData))
        console.log("I am called bcz of the change in DB")
        }
        )
    },[])
    function inputfunc(event)
    {
        console.log(event.target.value)
       // document.querySelector(".AddItem").disabled = !event.target.value;
        setItemval(event.target.value)
    }
    function selectfunc(event)
    {
        setItemcount(event.target.value)
    }
    function buttonfunc()
    {
        console.log(fullarray)
        setfullarray([...fullarray,itemcount+" "+itemval])
        database.collection('tripdata').add({itemData: itemcount+" "+itemval})
        setItemcount(1)
        setItemval("")
        console.log(fullarray)
    }
    const itrforoption=Array.from({length:10},(_,index)=>index+1)
    return(
        <div class='container'>
            <h2>Welcome to the travel App </h2>
            <h2>Choose your travel items {props.username}</h2>
            <select onChange={selectfunc} value={itemcount}>
                {itrforoption.map((val)=><option value={val}>{val}</option>)}
            </select>
            <input placeholder='Enter travel Items' onChange={inputfunc} value={itemval}></input>
            <button className="AddItem" onClick={buttonfunc} disabled={!itemval}>Add Item</button>
            <Items elements={fullarray} setfullarray={setfullarray}/>
        </div>

    )
}