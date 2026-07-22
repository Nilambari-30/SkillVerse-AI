import React from "react";


const projects = [

{
 title:"Swarm Robot Simulator",
 skill:"HTML, CSS, JavaScript",
 icon:"🤖"
},

{
 title:"AI Learning Assistant",
 skill:"Python, Machine Learning",
 icon:"🧠"
},

{
 title:"Expense Tracker App",
 skill:"React, Database",
 icon:"💰"
},

];


function Portfolio(){


return(

<section className="portfolio-section">


<h2>
Build Your <span>Skill Portfolio</span>
</h2>


<p>
Show your projects, skills and achievements to the world.
</p>



<div className="portfolio-container">


{
projects.map((project,index)=>(


<div className="project-card" key={index}>


<div className="project-icon">
{project.icon}
</div>


<h3>
{project.title}
</h3>


<p>
{project.skill}
</p>


<button>
View Project
</button>


</div>


))

}


</div>


</section>

)

}


export default Portfolio;