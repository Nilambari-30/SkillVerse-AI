import React from "react";


const members = [
  {
    name:"Aarav",
    skill:"React Developer",
    icon:"💻"
  },

  {
    name:"Riya",
    skill:"UI/UX Designer",
    icon:"🎨"
  },

  {
    name:"Kabir",
    skill:"AI Engineer",
    icon:"🤖"
  },

  {
    name:"Meera",
    skill:"Backend Developer",
    icon:"⚙️"
  }
];



function Community(){


return(

<section className="community-section">


<h2>
Find Your <span>Skill Partners</span>
</h2>


<p>
Collaborate with talented people and build amazing projects together.
</p>



<button className="team-btn">
Find My Team 🚀
</button>



<div className="members-container">


{
members.map((member,index)=>(


<div className="member-card" key={index}>


<div className="member-icon">
{member.icon}
</div>


<h3>
{member.name}
</h3>


<p>
{member.skill}
</p>


<button>
Connect
</button>


</div>


))

}


</div>



</section>

)

}


export default Community;