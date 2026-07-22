import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/Dashboard.css";


function Dashboard() {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const unsubscribe = onAuthStateChanged(
      auth,
      async(user)=>{


      if(!user){

        console.log("No user logged in");

        setLoading(false);

        return;

      }



      console.log("Current UID:", user.uid);



      try{


        const userRef = doc(
          db,
          "users",
          user.uid
        );



        const userSnap = await getDoc(userRef);




        if(userSnap.exists()){


          console.log(
            "User data found:",
            userSnap.data()
          );


          setUserData(
            userSnap.data()
          );


        }


        else{


          console.log(
            "Creating missing user profile..."
          );



          const newUser = {


            name: user.displayName || "User",

            email: user.email,

            joined:
            new Date().toLocaleDateString(),


            xp:0,

            streak:0,

            skills:[]


          };



          await setDoc(

            userRef,

            newUser

          );



          setUserData(newUser);



        }



      }

      catch(error){


        console.log(
          "Firebase Error:",
          error
        );


      }



      setLoading(false);



    });



    return ()=>unsubscribe();



  }, []);







  if(loading){

    return (

      <h2 style={{
        textAlign:"center",
        marginTop:"100px"
      }}>

        Loading Dashboard...

      </h2>

    );

  }







  if(!userData){


    return (

      <h2 style={{
        textAlign:"center",
        marginTop:"100px"
      }}>

        Unable to load profile

      </h2>

    );

  }







  return (

    <div className="dashboard">


      <h1>

        Welcome {userData.name} 👋

      </h1>



      <p>

        Keep learning every day.

      </p>




      <div className="stats">



        <div className="card">

          <h2>
            ⭐ XP
          </h2>

          <h1>
            {userData.xp}
          </h1>

        </div>





        <div className="card">

          <h2>
            🔥 Streak
          </h2>

          <h1>
            {userData.streak}
          </h1>

        </div>





        <div className="card">

          <h2>
            🎯 Skills
          </h2>


          <h1>

            {
              userData.skills
              ?
              userData.skills.length
              :
              0
            }

          </h1>


        </div>





        <div className="card">


          <h2>
            📅 Joined
          </h2>


          <h3>

            {
              userData.joined
              ||
              "Today"
            }

          </h3>


        </div>




      </div>



    </div>

  );


}


export default Dashboard;