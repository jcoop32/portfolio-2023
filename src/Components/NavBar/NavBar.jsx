const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
      <div className="container-fluid ">
        <a className="navbar-brand fs-2 text" href="#">
          <img
            src="./C (1).png"
            className="d-inline-block align-text-top"
            width={50}
            height={50}
          />
          Joshua Cooper
        </a>
        <div className="container"></div>
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
          className="collapse navbar-collapse d-flex justify-content"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-4 text m-2 ">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
