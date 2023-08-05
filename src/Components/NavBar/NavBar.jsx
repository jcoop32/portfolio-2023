import './NavBar.css';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg d-flex align-items-center"
      id="home"
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-2 text name" href="#">
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
            <a className="nav-link mx-3" href="#home">
              Home
            </a>
            <a className="nav-link mx-3" href="#about">
              About
            </a>
            <a className="nav-link mx-3" href="#projects">
              Projects
            </a>
            <a className="nav-link mx-3" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
