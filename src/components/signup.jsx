import React,{useState} from "react";

import {
createUserWithEmailAndPassword
}
from "firebase/auth";

import {auth} from "../firebase";



function Signup(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const signupUser=()=>{


createUserWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

alert("Account Created 🎉");

})

.catch((error)=>{

alert(error.message);

});


};



return(

<div className="auth-box">


<h2>
Create Account
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



<button onClick={signupUser}>
Signup
</button>


</div>

)

}


export default Signup;