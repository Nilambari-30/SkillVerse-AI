import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import ProtectedRoute from "./ProtectedRoute";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learn from "./pages/Learn";
import Teach from "./pages/Teach";
import Skills from "./pages/Skills";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Community from "./pages/Community";




function AppContent(){


  const location = useLocation();


  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";



  return (

    <>

      {
        !hideNavbar && <Navbar />
      }



      <Routes>


        {/* Home */}

        <Route
          path="/"
          element={<Home />}
        />



        {/* Protected Pages */}


        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }

        />



        <Route

          path="/profile"

          element={

            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>

          }

        />



        <Route

          path="/skills"

          element={

            <ProtectedRoute>

              <Skills />

            </ProtectedRoute>

          }

        />



        <Route

          path="/roadmap"

          element={

            <ProtectedRoute>

              <Roadmap />

            </ProtectedRoute>

          }

        />



        <Route

          path="/partners"

          element={

            <ProtectedRoute>

              <Community />

            </ProtectedRoute>

          }

        />





        {/* Normal Pages */}


        <Route
          path="/learn"
          element={<Learn />}
        />



        <Route
          path="/teach"
          element={<Teach />}
        />



        <Route
          path="/login"
          element={<Login />}
        />



        <Route
          path="/register"
          element={<Register />}
        />





        {/* 404 */}

        <Route

          path="*"

          element={

            <h1 style={{
              textAlign:"center",
              marginTop:"100px"
            }}>

              404 - Page Not Found

            </h1>

          }

        />


      </Routes>


    </>

  );

}






function App(){


const [loading,setLoading] = useState(true);



useEffect(()=>{


const timer = setTimeout(()=>{

setLoading(false);

},1000);



return ()=>clearTimeout(timer);


},[]);





if(loading){

return <Loading />;

}





return (

<BrowserRouter>

<AppContent />

</BrowserRouter>

);


}



export default App;