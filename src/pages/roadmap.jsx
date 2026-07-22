import { useState } from "react";


const roadmaps = {

  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
  ],


  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Authentication",
  ],


  AI: [
    "Python",
    "NumPy",
    "Pandas",
    "Machine Learning",
    "Deep Learning",
  ],


  Java: [
    "Core Java",
    "OOP",
    "Collections",
    "JDBC",
    "Spring Boot",
  ],


  Cyber: [
    "Networking",
    "Linux",
    "Ethical Hacking",
    "OWASP",
    "Pen Testing",
  ],

};



function Roadmap() {


const [career,setCareer] = useState("Frontend");


const [completed,setCompleted] = useState([]);



const steps = roadmaps[career];



const toggleComplete = (index)=>{


if(completed.includes(index)){


setCompleted(

completed.filter(
(item)=>item!==index
)

);


}

else{


setCompleted([

...completed,

index

]);


}


};




const progress = Math.round(

(completed.length / steps.length) * 100

);




return (

<div className="max-w-6xl mx-auto py-16 px-6">


<h1 className="text-5xl font-bold text-center mb-10">

🤖 AI Career Roadmap

</h1>



<div className="flex justify-center mb-10">


<select

value={career}

onChange={(e)=>{

setCareer(e.target.value);

setCompleted([]);

}}

className="border p-3 rounded-xl"

>


<option>
Frontend
</option>


<option>
Backend
</option>


<option>
AI
</option>


<option>
Java
</option>


<option>
Cyber
</option>


</select>


</div>





<div className="text-center mb-10">


<h2 className="text-2xl font-bold">

Progress: {progress}%

</h2>


<div className="w-full bg-gray-200 rounded-full h-3 mt-3">


<div

className="bg-indigo-600 h-3 rounded-full"

style={{
width:`${progress}%`
}}

>

</div>


</div>


</div>





<div className="grid md:grid-cols-5 gap-5">


{

steps.map((step,index)=>(


<div

key={index}

onClick={()=>toggleComplete(index)}

className={`

cursor-pointer

bg-white

border

rounded-xl

p-6

shadow-sm

hover:shadow-lg

transition

${

completed.includes(index)

?

"border-green-500 bg-green-50"

:

""

}

`}


>


<h2 className="text-3xl font-bold text-indigo-600">

{

completed.includes(index)

?

"✅"

:

index+1

}


</h2>



<p className="mt-4 font-semibold">

{step}

</p>



{

completed.includes(index)

&&

<p className="text-green-600 mt-2">

Completed 🎉

</p>

}



</div>


))

}


</div>



</div>

);

}


export default Roadmap;