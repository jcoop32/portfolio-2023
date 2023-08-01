import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex align-items-center">
      <div className="container-fluid">
        <a className="navbar-brand fs-2 text" href="#">
          <img
            src={require('../Footer/me.png')}
            className="d-inline-block logo-icon-nav me-3"
          />
          Joshua Cooper
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-4 text">
            <a className="nav-link mx-3" href="#">
              Home
            </a>
            <a className="nav-link mx-3" href="#">
              About
            </a>
            <a className="nav-link mx-3" href="#">
              Projects
            </a>
            <a className="nav-link mx-3" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
