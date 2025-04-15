import { useEffect } from "react";
import { errorFlag } from "../../data";
import "./index.css";
export default function () {
  const [error, setError] = errorFlag.useStore();
  // useEffect(() => {
  //   if (!error) return;

  //   const timer = setTimeout(() => {
  //     setError({ value: false });
  //   }, 3000); // 3 seconds

  //   return () => clearTimeout(timer); // Cleanup if component unmounts
  // }, [error]);
  if (!error.value) return;
  return (
    <div className="error-popup">
      <div
        className="popup-icon"
        onClick={() => {
          console.log("cliced");
          setError({ value: false });
        }}
      >
        <i className="fa-solid fa-circle-exclamation"></i>
      </div>
      <div className="popup-text">{error.message}</div>
    </div>
  );
}
