import React,{useState} from "react";

import {
 signInWithEmailAndPassword
}
from "firebase/auth";

import {auth} from "../firebase";


function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const loginUser = () => {
  alert("Button clicked!");
};



return(

<div className="auth-box">


<h2>
Login
</h2>


<input

type="email"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>


<input

type="password"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button onClick={loginUser}>
Login
</button>


</div>

)

}


export default Login;