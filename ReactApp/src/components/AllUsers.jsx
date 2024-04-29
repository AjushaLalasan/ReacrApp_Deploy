import { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./Logout";
import RazorpayComponent from "./RazorpayComponent";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        // const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("Token not found in localStorage");
          return;
        }

        const response = await axios.get(
          "http://localhost:8080/api/users/readUsers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Logout />
      <RazorpayComponent />
    </div>
  );
}
