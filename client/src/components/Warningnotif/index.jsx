import { useEffect } from "react";
import { warnningFlas } from "../../data";
import "./index.css";
export default function () {
  const [warning, setWarning] = warnningFlas.useStore();
  useEffect(() => {
    if (!warning.value) return;

    const timer = setTimeout(() => {
      setWarning({ value: false });
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, [warning]);
  if (!warning.value) return;
  return (
    <div className="warning-popup">
      <div
        className="popup-icon"
        onClick={() => {
          console.log("cliced");
          setWarning({ value: false });
        }}
      >
        <i className="fa-solid fa-circle-exclamation"></i>
      </div>
      <div className="popup-text">{warning.message}</div>
    </div>
  );
}
