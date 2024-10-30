import React, { useState } from "react";

const Four = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registration, setRegistration] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuth = () => {
    // login
    if (registration) {
      if (registration) {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsLoggedIn(true);
          alert("Login Successfull");
        } else {
          alert("Login Failed! User not registered, Try Again");
        }
      }
    } else {
      //registered

      if (email === "" && password === "") {
        alert("Please enter both email and password");
        return;
      }
      const newUser = { email, password };
      setUsers([...users, newUser]);
      alert("Registered Successfull");
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div>
        {isLoggedIn ? (
          <div>
            <h2>Welcome {email}</h2>
            <button onClick={handleLogOut}>Logout</button>
          </div>
        ) : (
          <div>
            <div>
              <h1>{registration ? "Login Account" : "Registered Account"}</h1>
            </div>
            <form>
              <input
                type="email"
                value={email}
                placeholder="Enter email "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                value={password}
                placeholder="Enter password "
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button onClick={handleAuth}>
                {registration ? "Login" : "Register"}
              </button>
            </form>

            <div style={{ marginTop: "20px" }}>
              {registration
                ? "Don't have an Account? Registered"
                : "Already have an Account? Login"}
            </div>
            <button
              style={{ marginTop: "20px" }}
              onClick={() => setRegistration(!registration)}
            >
              {registration ? "Registered" : " Login"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Four;
