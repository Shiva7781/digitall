import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Emp from "./components/Emp.jsx";
import { AuthState } from "./components/context/AuthContextProvider";

function App() {
  const { user } = AuthState();

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={user ? <Navigate to="/emps" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/emps" /> : <Signup />}
        />

        <Route path="/emps" element={user ? <Emp /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
