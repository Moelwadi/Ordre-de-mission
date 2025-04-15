import "./index.css";
const LinksByRole = {
  "": { uitext: 'onClick(navigateTo("url"))' },
};
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
        <a style={{ "--titel": "'Bon de Sortie'" }} href="">
          <i className="fa-solid fa-file-arrow-up"></i>
        </a>
        <a style={{ "--titel": "'Ordre de Mission'" }} href="">
          <i className="fa-solid fa-briefcase"></i>
        </a>
        <a style={{ "--titel": "'Liste des Ordres de Mission'" }} href="">
          <i className="fa-solid fa-list"></i>
        </a>
        <a style={{ "--titel": "'Liste des Bons de Sortie'" }} href="">
          <i className="fa-solid fa-list-check"></i>
        </a>
      </div>
      <div className="settings">
        <div className="notif">
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
    </nav>
  );
}
