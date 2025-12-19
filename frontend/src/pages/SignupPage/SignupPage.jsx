import { useNavigate } from "react-router-dom"
import { useState } from "react";
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const SignupPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleSignup = async () => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Signup failed");
          return;
        }

        navigate("/login");
      } catch (err) {
        alert("Something went wrong");
      }
    };

    return (
      <div className = "signup-page">
        <div className = "left-pane">
          <h1 className = "left-title">Welcome Back</h1>

          <button onClick={() => navigate("/login")}>Sign In</button>
        </div>
        <div className = "right-pane" />

        <div className = "center-pane">
          <h1 className = "title">Sign Up</h1>

          <div className="social-row">
            <img src={facebook} alt="Facebook Logo" className="facebook-logo" />
            <img src={instagram} alt="Instagram Logo" className="instagram-logo" />
            <img src={twitter} alt="Twitter Logo" className="twitter-logo" />
          </div>

          <div className = "input-group">
            <label>Username</label>
            <input
              className = "text-input"
              placeholder="Enter your username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>
          <div className = "input-group">
            <label>Email</label>
            <input
              className = "text-input"
              placeholder="Enter your email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className = "input-group">
            <label>Password</label>
            <input
              className = "text-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
            />
          </div>
          <button className = "signin-btn" onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    )

}

export default SignupPage;