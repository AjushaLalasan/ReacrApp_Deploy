import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://18.183.75.46:8080/api/auth/authenticate",
        formData
      );
      // try {
      //   const response = await axios.post(
      //     "http://localhost:8080/api/auth/authenticate",
      //     formData
      //   );
      console.log(response.data);
      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      // sessionStorage.setItem("token", token);
      // sessionStorage.setItem("role", role);
      alert("Login Success.!");
      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/users");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid Credentials.!");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      Need an Account<Link to="/">Click here</Link> to Register.
    </div>
  );
}
