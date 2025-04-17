import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UINotifications from "./utils/UINotifications";
import Login from "./Routes/Login";
import MessionOrder from "./Routes/MessionOrder";
import Bonsortie from "./Routes/Bonsortie";
import ListOrderMession from "./Routes/ListOrderMession";
import ListBonSortie from "./Routes/ListBonSortie";

function App() {
  return (
    <>
      <Navbar />
      <UINotifications />
      <Routes>
        <Route path="/" element={<>empty</>} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-mission" element={<MessionOrder />} />
        <Route path="/bon-sortie" element={<Bonsortie />} />
        <Route path="/list-order-mession" element={<ListOrderMession />} />
        <Route path="/list-bon-sortie" element={<ListBonSortie />} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  );
}

export default App;
