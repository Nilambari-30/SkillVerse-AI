import React, { useState } from "react";


function AIMentor(){

  const [goal,setGoal] = useState("");
  const [result,setResult] = useState("");


  const generateRoadmap = ()=>{

    if(goal===""){
      setResult("Please enter your learning goal 🚀");
      return;
    }


    setResult(
      `Your AI Learning Roadmap for ${goal}:

      1. Learn Basic Concepts 📚
      2. Practice Small Projects 💻
      3. Build Real Applications 🚀
      4. Create Portfolio ⭐
      5. Participate in Challenges 🏆`
    );

  };


  return(

    <section className="ai-section">


      <h2>
        Your Personal <span>AI Skill Mentor</span>
      </h2>


      <p>
        Tell AI what you want to learn and get your personalized roadmap.
      </p>



      <div className="ai-box">


        <input

          type="text"

          placeholder="Example: I want to learn Web Development"

          value={goal}

          onChange={(e)=>setGoal(e.target.value)}

        />


        <button onClick={generateRoadmap}>
          Generate Roadmap
        </button>


      </div>



      {
        result &&

        <div className="roadmap">

          {result}

        </div>

      }


    </section>

  );

}


export default AIMentor;