import Layout from "./Layout/Index";
import Setting from "./Pages/Setting";
import Users from "./Pages/Users";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Login/SignUp";
export default function App() {
  // const token = localStorage?.getItem("token");
  const token = true;
  return (
    <BrowserRouter>
      {token ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/Reports" element={<Reports />}></Route>
            <Route path="/transactions" element={<Setting />}></Route>
            <Route path="/statistics" element={<Setting />}></Route>
            <Route path="/calender" element={<Setting />}></Route>
            <Route path="/mails" element={<Setting />}></Route>
            <Route path="/supports" element={<Setting />}></Route>
            <Route path="/settings" element={<Setting />}></Route>
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
