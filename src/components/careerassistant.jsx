import React, { useState } from "react";


function CareerAssistant(){


const [career,setCareer] = useState("");

const [advice,setAdvice] = useState("");



const generateAdvice = ()=>{


if(career===""){

setAdvice("Please enter your career goal 🚀");

return;

}



setAdvice(

`AI Career Roadmap for ${career}:

1. Learn Core Fundamentals 📚

2. Practice Real Projects 💻

3. Improve Problem Solving 🧠

4. Build Professional Portfolio ⭐

5. Participate in Hackathons 🏆

6. Prepare for Interviews 🎯`

);


};



return(

<section className="career-section">


<h2>
AI Career <span>Assistant</span>
</h2>


<p>
Discover what skills you need for your dream career.
</p>



<div className="career-box">


<input

type="text"

placeholder="Example: AI Engineer, Full Stack Developer"

value={career}

onChange={(e)=>setCareer(e.target.value)}

/>


<button onClick={generateAdvice}>
Generate Career Plan
</button>


</div>



{

advice &&

<div className="career-result">

{advice}

</div>

}



</section>

)

}


export default CareerAssistant;