import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    roles: "USER",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/createUser",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Create User" />
      </form>
      Already Have an Account<Link to="/login">Click here</Link> to login.
    </div>
  );
}
