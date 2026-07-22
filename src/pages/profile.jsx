import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/Profile.css";


function Profile() {

  const [userData, setUserData] = useState(null);
  const [newName, setNewName] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [saving, setSaving] = useState(false);



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async(user)=>{

      if(!user) return;


      try{

        const docRef = doc(db,"users",user.uid);

        const docSnap = await getDoc(docRef);


        if(docSnap.exists()){

          const data = docSnap.data();

          setUserData(data);
          setNewName(data.name || "");

        }


      }
      catch(error){

        console.log(error);

      }


    });


    return ()=>unsubscribe();


  },[]);




  if(!userData){

    return(
      <h2 style={{
        textAlign:"center",
        marginTop:"100px"
      }}>
        Loading Profile...
      </h2>
    );

  }





  const saveProfile = async()=>{


    const user = auth.currentUser;


    if(!user) return;


    try{


      setSaving(true);


      let updatedSkills = userData.skills || [];


      if(newSkill.trim() !== ""){

        updatedSkills = [
          ...updatedSkills,
          newSkill.trim()
        ];

      }



      await updateDoc(
        doc(db,"users",user.uid),
        {
          name:newName,
          skills:updatedSkills
        }
      );



      setUserData({

        ...userData,

        name:newName,

        skills:updatedSkills

      });


      setNewSkill("");


      alert("Profile Updated ✅");


    }
    catch(error){

      console.log(error);
      alert("Update failed");

    }
    finally{

      setSaving(false);

    }


  };





  return (

    <div className="profile-page">


      <div className="profile-card">


        <h1>👤 My Profile</h1>


        <h2>{userData.name}</h2>


        <p>
          📧 {userData.email}
        </p>


        <p>
          📅 Joined : {userData.joined}
        </p>


        <p>
          ⭐ XP : {userData.xp || 0}
        </p>


        <p>
          🔥 Streak : {userData.streak || 0}
        </p>



        <p>
          🎯 Skills :

          {
            userData.skills && userData.skills.length > 0

            ? userData.skills.join(", ")

            : " No Skills Added"

          }

        </p>



        <hr />


        <h3>
          Edit Profile
        </h3>



        <input

          type="text"

          value={newName}

          onChange={(e)=>setNewName(e.target.value)}

          placeholder="Your Name"

        />



        <br/><br/>




        <input

          type="text"

          value={newSkill}

          onChange={(e)=>setNewSkill(e.target.value)}

          placeholder="Add Skill"

        />



        <br/><br/>




        <button onClick={saveProfile}>

          {
            saving 
            ? "Saving..."
            : "Save Changes"
          }

        </button>



      </div>


    </div>

  );

}


export default Profile;