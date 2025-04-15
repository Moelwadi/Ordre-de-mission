import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UINotifications from "./utils/UINotifications";
import Login from "./Routes/Login";

function App() {
  return (
    <>
      <Navbar />
      <UINotifications />
      <Routes>
        <Route path="/" element={<>empty</>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
