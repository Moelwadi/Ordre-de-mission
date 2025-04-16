import "./index.css";
export default function () {
  return (
    <>
      <h1>bon de sortie</h1>
      <div className="bon-sortie">
        <div className="left">
          <div>
            <label htmlFor=""> nom</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""> date </label>
            <input type="date" />
          </div>
        </div>
        <div className="rigth">
          <div>
            <label htmlFor=""> destination </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""> materiel </label>
            <textarea></textarea>
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
