import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "../styles/Login.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register User
  const registerUser = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      // Create Authentication Account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save User Data in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
        joined: new Date().toLocaleDateString(),
        xp: 0,
        streak: 0,
        skills: []
      });

      alert("Account Created Successfully 🎉");

      // Clear input fields
      setName("");
      setEmail("");
      setPassword("");

      // Go to Login Page
      window.location.href = "/login";

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please log in instead.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Create Account</h1>

        <p className="login-subtitle">
          Join SkillVerse AI and start your learning journey.
        </p>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            {" "}Show Password
          </label>
        </div>

        <button
          className="login-btn"
          onClick={registerUser}
        >
          Create Account
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;