import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


const skillList = [

  {
    name: "React",
    category: "Frontend",
    level: "Intermediate",
  },

  {
    name: "Java",
    category: "Programming",
    level: "Beginner",
  },

  {
    name: "Python",
    category: "Programming",
    level: "Intermediate",
  },

  {
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
  },

  {
    name: "HTML & CSS",
    category: "Frontend",
    level: "Beginner",
  },

  {
    name: "Artificial Intelligence",
    category: "AI",
    level: "Advanced",
  },

];



function Skills() {


  const [search,setSearch] = useState("");

  const [userSkills,setUserSkills] = useState([]);

  const [user,setUser] = useState(null);




  useEffect(()=>{


    const unsubscribe = onAuthStateChanged(auth, async(currentUser)=>{


      setUser(currentUser);


      if(currentUser){


        const ref = doc(
          db,
          "users",
          currentUser.uid
        );


        const snap = await getDoc(ref);


        if(snap.exists()){


          setUserSkills(
            snap.data().skills || []
          );


        }


      }


    });



    return ()=>unsubscribe();


  },[]);







  const addSkill = async(skill)=>{


    if(!user){

      alert("Please login first");

      return;

    }



    const alreadyAdded = userSkills.some(

      item => item.name === skill.name

    );



    if(alreadyAdded){

      alert("Skill already added");

      return;

    }




    const updatedSkills = [

      ...userSkills,

      {

        name:skill.name,

        category:skill.category,

        level:skill.level,

        progress:0

      }

    ];




    await updateDoc(

      doc(db,"users",user.uid),

      {

        skills:updatedSkills,

        xp: (userSkills.length + 1) * 50

      }

    );



    setUserSkills(updatedSkills);



    alert(
      `${skill.name} added 🚀 +50 XP`
    );


  };







  const filteredSkills = skillList.filter((skill)=>

    skill.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );





  return (


    <div className="max-w-6xl mx-auto py-16 px-6">


      <h1 className="text-5xl font-bold text-center mb-8">

        🚀 Skill Explorer

      </h1>





      <input

        type="text"

        placeholder="Search skills..."

        className="w-full border rounded-xl p-4 mb-10"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />







      <div className="grid md:grid-cols-3 gap-6">


      {

        filteredSkills.map((skill,index)=>(


          <div

          key={index}

          className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition"


          >


            <h2 className="text-2xl font-bold">

              {skill.name}

            </h2>



            <p className="mt-3">

              Category:

              <span className="text-indigo-600 font-semibold">

                {" "}{skill.category}

              </span>

            </p>




            <p>

              Level:

              <span className="text-green-600 font-semibold">

              {" "}{skill.level}

              </span>


            </p>





            <button

            className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"


            onClick={()=>addSkill(skill)}

            >

              Add Skill +50 XP


            </button>




          </div>


        ))

      }


      </div>




    </div>


  );


}


export default Skills;