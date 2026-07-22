
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Navbar.css";


function Navbar() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();



  // Check Login Status
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

      }
    );


    return () => unsubscribe();


  }, []);





  // Logout Function
  const logoutUser = async () => {

    try {

      await signOut(auth);

      alert("Logged Out Successfully 👋");

      setOpen(false);

      navigate("/login");


    } 
    catch(error) {

      alert(error.message);

    }

  };




  const closeMenu = () => {

    setOpen(false);

  };




  return (

    <nav className="navbar">


      {/* Logo */}

      <Link to="/" className="logo">

        SkillVerse
        <span>AI</span>

      </Link>




      {/* Hamburger */}

      <button

        className="menu-icon"

        onClick={() => setOpen(!open)}

        aria-label="Menu"

      >

        ☰

      </button>





      {/* Links */}

      <div

        className={
          open 
          ? "nav-links active"
          : "nav-links"
        }

      >


        <Link 
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>



        <Link 
          to="/skills"
          onClick={closeMenu}
        >
          Skills
        </Link>



        <Link 
          to="/roadmap"
          onClick={closeMenu}
        >
          AI Mentor
        </Link>



        <Link 
          to="/partners"
          onClick={closeMenu}
        >
          Community
        </Link>



        <Link 
          to="/profile"
          onClick={closeMenu}
        >
          Portfolio
        </Link>



        <Link 
          to="/dashboard"
          onClick={closeMenu}
        >
          Dashboard
        </Link>





        {
          user ?

          (

            <button

              className="login-btn"

              onClick={logoutUser}

            >

              Logout

            </button>


          )

          :

          (

            <button

              className="login-btn"

              onClick={()=>navigate("/login")}

            >

              Login

            </button>


          )

        }


      </div>


    </nav>

  );

}


export default Navbar;