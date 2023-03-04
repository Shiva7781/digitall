import axios from "axios";
import React, { useState } from "react";

const Emp = () => {
  const [empData, setEmpData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:7781/api/emps`);

      setEmpData(data);
      // console.log("data:", data);
    } catch (err) {
      alert(err.response?.data || err.message);
      console.log("err:", err.response?.data || err.message);
    }
  };

  return (
    <div className="EmpDetails">
      <button onClick={fetchData}>GET EMP DATA</button>

      {empData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((v, i) => {
              const { name, email, post, profile } = v;

              return (
                <tr key={i}>
                  <td>
                    <img src={profile} alt="" />
                  </td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{post}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>Click the button to fetch the data</>
      )}
    </div>
  );
};

export default Emp;
