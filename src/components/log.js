import React ,{useState} from 'react'
import Success from './success'
import Fail from './fail'
import '../App.css'

function Log () {
    // We will create a check to see if the username and password are the same
    const user = "MoonDoc"
    const password = "fohills"

    // takes users input for username and password
    const[userCheck, setUserName] = useState("")
    const[passwordCheck, setPassword] = useState("")

    // the showlogin is used in tandum with handlelogin to set the result for the if statements
    const[showLogin, setShowLogin] = useState("")



    function handleLogin(eve) {
        //event.preventDefault is to cancel the reload which is a default action that belongs to eve
        eve.preventDefault()
        //checking and using different pages to set an answer to if you met the credentials of the password and user()
        if(userCheck === user && password === passwordCheck){
            setShowLogin(<Success user = {user}/>)
        }else{
            setShowLogin(<Fail />)
        }
    }
    //this targets the input and allows the code to know where we are on the page
    const handle1 = (event) => setUserName(event.target.value)
    const handle2 = (event) => setPassword(event.target.value)

    return(
<div className="dad">
   <div className="container">
       <div className="containerS">

<form onSubmit = {handleLogin}>
   <div> <label><input id ="username" type = 'text' placeholder="User Name" onChange={handle1}></input></label></div>
    <label><input id ="password" type = 'text' placeholder="Password" onChange={handle2}></input></label>
    <div><button id="btnL">Log In</button></div>
            <div>{showLogin}</div>
</form>
       </div>
            <div className="loader"></div>
    </div> 
</div>
    )
}
export default Log