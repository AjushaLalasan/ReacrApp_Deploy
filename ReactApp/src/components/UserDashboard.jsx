import { useState, useEffect } from "react";
import axios from "axios";
import Logout from "./Logout";
// import RazorpayComponent from "./RazorpayComponent";

export default function UserDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token not found in localStorage");
          return;
        }

        const response = await axios.get(
          "http://localhost:8080/api/course/readCourses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourse();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Logout />
      {/* <RazorpayComponent /> */}
    </div>
  );
}
