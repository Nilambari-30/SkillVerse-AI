import React from "react";


function Dashboard(){

const stats = [
    {
        title:"Skills Learned",
        value:"12",
        icon:"🚀"
    },
    {
        title:"Projects Completed",
        value:"8",
        icon:"💻"
    },
    {
        title:"Learning Streak",
        value:"25 Days",
        icon:"🔥"
    },
    {
        title:"Badges Earned",
        value:"15",
        icon:"🏆"
    }
];


return(

<section className="dashboard-section">


<h2>
Your <span>Skill Dashboard</span>
</h2>


<p>
Track your learning journey and achievements.
</p>



<div className="profile-card">

<div className="profile-image">
👩‍💻
</div>


<div>

<h3>
Welcome, Learner!
</h3>

<p>
Keep learning and building amazing projects.
</p>

</div>

</div>




<div className="dashboard-container">


{
stats.map((item,index)=>(

<div className="dashboard-card" key={index}>


<div className="dashboard-icon">
{item.icon}
</div>


<h3>
{item.value}
</h3>


<p>
{item.title}
</p>


</div>

))

}


</div>


</section>

)

}


export default Dashboard;