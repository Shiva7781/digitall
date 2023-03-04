import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "./context/AuthContextProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { Signup } = AuthState();

  const [userData, setUserData] = useState({});

  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const submitData = (e) => {
    e.preventDefault();

    const name = Name.current.value;
    const email = Email.current.value;
    const password = Password.current.value;

    setUserData({ name, email, password });
  };

  return (
    <div className="signup_page">
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <h3>SignUp</h3>

        <div>
          <label>
            <input
              type="text"
              placeholder="Name"
              ref={Name}
              onChange={submitData}
            />
          </label>
        </div>
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
          <button type="submit" onClick={() => Signup(userData)}>
            Signup
          </button>
        </div>
      </form>

      <div>
        <Link className="meassage" to="/">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
