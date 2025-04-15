import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UINotifications from "./utils/UINotifications";
import MessionOrder from "./Routes/MessionOrder";

function App() {
  return (
    <>
      <Navbar />
      <UINotifications />
      <Routes>
        <Route path="/" element={<MessionOrder />} />
      </Routes>
    </>
  );
}

export default App;
