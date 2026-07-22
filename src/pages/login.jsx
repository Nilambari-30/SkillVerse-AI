import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful 🚀");

      window.location.href = "/dashboard";

    } catch (error) {

      if (error.code === "auth/user-not-found") {
        alert("No account found with this email.");
      }

      else if (error.code === "auth/wrong-password") {
        alert("Incorrect password.");
      }

      else if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password.");
      }

      else {
        alert(error.message);
      }

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Login to continue your learning journey.
        </p>

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
            placeholder="Enter your password"
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
          onClick={loginUser}
        >
          Login
        </button>

        <p className="signup-text">

          New to SkillVerse AI?{" "}

          <Link to="/register">
            Create Account
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;