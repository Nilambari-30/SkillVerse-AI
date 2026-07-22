import React from "react";


const skills = [

{
name:"React Development",
progress:"80%"
},

{
name:"Python Programming",
progress:"65%"
},

{
name:"UI/UX Design",
progress:"75%"
},

{
name:"Artificial Intelligence",
progress:"55%"
}

];



function ProgressTracker(){


return(

<section className="progress-section">


<h2>
Your <span>Skill Progress</span>
</h2>


<p>
Track your improvement and level up your skills.
</p>



<div className="progress-container">


{
skills.map((skill,index)=>(


<div className="progress-card" key={index}>


<div className="progress-title">

<h3>
{skill.name}
</h3>


<span>
{skill.progress}
</span>


</div>



<div className="progress-bar">


<div 
className="progress-fill"
style={{width:skill.progress}}
>

</div>


</div>



</div>


))

}


</div>



<div className="level-card">

<h2>
Level 12 🚀
</h2>

<p>
850 XP earned • Keep learning to unlock new badges!
</p>


</div>



</section>

)

}


export default ProgressTracker;