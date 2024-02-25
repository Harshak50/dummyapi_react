import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import "./login.css"

export const LoginPage = () => {
  const [userEmail, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // 

  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading stat
    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      login(res.data);
      console.log(res.data); // Assuming you want to log the response data
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <div className="login-container" style={{marginTop:"10%"}}>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="Email Id">Username:</label>
          <input
            id="username"
            type="text"
            value={userEmail}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      {loading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        ) : (
          <button className="btn btn-primary" type="submit">Login</button>
        )}
      </form>
    </div>
  );
};
