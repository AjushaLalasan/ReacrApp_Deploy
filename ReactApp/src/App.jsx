// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import UserList from "./components/AllUsers";
// import UserDashboard from "./components/UserDashboard";
import RazorpayComponent from "./components/RazorpayComponent";

function App() {
  return (
    <>
      <RazorpayComponent />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<UserList />} />
          <Route path="/users" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
