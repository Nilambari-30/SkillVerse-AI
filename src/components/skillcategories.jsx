import React from "react";

const skills = [
  {
    title: "Programming",
    icon: "💻",
    desc: "Learn coding, DSA, Web Development, AI and build projects."
  },
  {
    title: "Design",
    icon: "🎨",
    desc: "Improve UI/UX, Graphics, 3D design and creativity."
  },
  {
    title: "Communication",
    icon: "🎤",
    desc: "Practice speaking, interviews and professional skills."
  },
  {
    title: "AI & Data",
    icon: "🤖",
    desc: "Explore Machine Learning, Data Science and AI tools."
  },
  {
    title: "Entrepreneurship",
    icon: "🚀",
    desc: "Build startup ideas and learn business skills."
  },
  {
    title: "Team Projects",
    icon: "👥",
    desc: "Find partners and collaborate on real projects."
  }
];


function SkillCategories() {
  return (
    <section className="skills-section">

      <h2>
        Explore Your <span>Skills</span>
      </h2>

      <p className="skills-subtitle">
        Learn, practice, collaborate and prove your abilities.
      </p>


      <div className="skills-container">

        {
          skills.map((skill,index)=>(
            
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.desc}
              </p>

            </div>

          ))
        }

      </div>

    </section>
  );
}


export default SkillCategories;