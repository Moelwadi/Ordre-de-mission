import "./index.css";
export default function () {
  return (
    <>
      <h1>order de mission</h1>
      <div className="mession-order">
        <div className="left">
          <div>
            <label htmlFor=""> nom prenom </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""> date </label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor=""> objective </label>
            <textarea></textarea>
          </div>
        </div>
        <div className="rigth">
          {" "}
          <div>
            <label htmlFor=""> persone a rencontre </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""> matrecule </label>
            <input type="text" />
          </div>
          <div className="btns">
            <button className="submit">submit</button>
            <button className="cancle">cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
