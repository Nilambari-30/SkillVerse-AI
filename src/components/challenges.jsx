import React from "react";


const challenges = [

{
 title:"Build a Portfolio Website",
 category:"Web Development",
 points:"100 XP",
 icon:"💻"
},

{
 title:"Create AI Project Idea",
 category:"Artificial Intelligence",
 points:"150 XP",
 icon:"🤖"
},

{
 title:"Design Mobile App UI",
 category:"UI/UX Design",
 points:"120 XP",
 icon:"🎨"
},

{
 title:"Solve DSA Problems",
 category:"Programming",
 points:"200 XP",
 icon:"🧠"
}

];



function Challenges(){


return(

<section className="challenge-section">


<h2>
Weekly <span>Skill Challenges</span>
</h2>


<p>
Complete challenges, earn XP and climb the leaderboard.
</p>



<div className="challenge-container">


{
challenges.map((challenge,index)=>(


<div className="challenge-card" key={index}>


<div className="challenge-icon">
{challenge.icon}
</div>


<h3>
{challenge.title}
</h3>


<p>
{challenge.category}
</p>


<div className="xp">
⭐ {challenge.points}
</div>


<button>
Start Challenge
</button>


</div>


))

}


</div>


</section>

)

}


export default Challenges;