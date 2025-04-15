import Errornotif from "../components/Errornotif";
import Warningnotif from "../components/Warningnotif";

export default function UINotifications() {
  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: "50%",
        transform: "translate(-50%, 0)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Errornotif />
      <Warningnotif />
    </div>
  );
}
