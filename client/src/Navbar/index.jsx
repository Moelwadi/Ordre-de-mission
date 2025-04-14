import "./index.css";
export default function () {
  return (
    <nav className="navbar">
      <div className="user-profile">
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
        <div className="user-info">
          <div className="user-name">user name</div>
          <div className="user-grp">
            <p className="text">grp</p>
            <span className="icon">
              <i className="fa-solid fa-circle-xmark"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="nav-link">
        <a href="">Lorem, ipsum.</a>
        <a href="">Esse, perspiciatis!</a>
        <a href="">Amet, quam.</a>
        <a href="">Eligendi, veniam.</a>
        <a href="">Voluptas, tempore.</a>
      </div>
    </nav>
  );
}
