import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "./context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const { login } = AuthState();

  const [userData, setUserData] = useState({});

  const Email = useRef(null);
  const Password = useRef(null);

  const submitData = (e) => {
    e.preventDefault();

    const email = Email.current.value;
    const password = Password.current.value;

    setUserData({ email, password });
  };

  return (
    <div className="login_page">
      <form onSubmit={submitData} className="form">
        <h3>Login</h3>

        <div>
          <label>
            <input
              type="email"
              placeholder="Email"
              ref={Email}
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="Password"
              ref={Password}
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              login(userData);
            }}
          >
            Login
          </button>
        </div>
      </form>

      <div>
        <Link className="meassage" to="/signup">
          Create a new account? SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
