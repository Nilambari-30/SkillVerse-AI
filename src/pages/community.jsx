import { useState } from "react";
import "../styles/Community.css";


const initialProjects = [

  {
    title: "AI Expense Tracker",
    description: "Build an AI based personal finance management application.",
    skills: ["React", "Python", "AI"],
    members: 3
  },


  {
    title: "Smart Learning Platform",
    description: "Create an online learning ecosystem for students.",
    skills: ["React", "Firebase"],
    members: 2
  },


  {
    title: "Health Assistant AI",
    description: "AI chatbot for basic health assistance.",
    skills: ["Python", "Machine Learning"],
    members: 4
  }

];



function Community(){


const [projects,setProjects] = useState(initialProjects);



const [newProject,setNewProject] = useState({

title:"",
description:"",
skills:""

});





const createProject = ()=>{


if(!newProject.title){

alert("Enter project name");

return;

}



const project = {

title:newProject.title,

description:newProject.description,

skills:newProject.skills.split(","),

members:1

};



setProjects([

...projects,

project

]);



setNewProject({

title:"",
description:"",
skills:""

});


};





return (

<div className="community-page">


<h1>
🤝 Project Community
</h1>


<p>
Find teammates and build projects together.
</p>




<div className="create-box">


<h2>
Create Project
</h2>



<input

type="text"

placeholder="Project Name"

value={newProject.title}

onChange={(e)=>

setNewProject({

...newProject,

title:e.target.value

})

}

/>





<textarea

placeholder="Project Description"

value={newProject.description}

onChange={(e)=>

setNewProject({

...newProject,

description:e.target.value

})

}

/>





<input

type="text"

placeholder="Required Skills (React, Python)"

value={newProject.skills}

onChange={(e)=>

setNewProject({

...newProject,

skills:e.target.value

})

}

/>




<button onClick={createProject}>

Create Project 🚀

</button>


</div>






<div className="project-grid">


{

projects.map((project,index)=>(


<div

className="project-card"

key={index}

>


<h2>

{project.title}

</h2>



<p>

{project.description}

</p>




<h4>
Required Skills
</h4>



<div>

{

project.skills.map((skill,i)=>(


<span key={i}>

{skill}

</span>


))

}

</div>



<p>

👥 Members: {project.members}

</p>




<button>

Join Team

</button>



</div>


))

}


</div>




</div>

);


}



export default Community;