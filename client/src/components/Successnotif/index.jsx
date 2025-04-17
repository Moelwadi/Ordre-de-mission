import { useEffect } from "react";
import { successFlag } from "../../data";
import "./index.css";
export default function () {
  const [Success, setSuccess] = successFlag.useStore();
  // useEffect(() => {
  //   if (!Success) return;

  //   const timer = setTimeout(() => {
  //     setSuccess({ value: false });
  //   }, 3000); // 3 seconds

  //   return () => clearTimeout(timer); // Cleanup if component unmounts
  // }, [Success]);
  if (!Success.value) return;
  return (
    <div className="sucess-popup">
      <div
        className="popup-icon"
        onClick={() => {
          console.log("cliced");
          setSuccess({ value: false });
        }}
      >
        <i className="fa-solid fa-circle-exclamation"></i>
      </div>
      <div className="popup-text">{Success.message}</div>
    </div>
  );
}
