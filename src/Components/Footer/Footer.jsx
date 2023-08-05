import './Footer.css';

const Footer = () => {
  return (
    <section id="contact">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src={require('./me.png')} alt="Me" className="logo-icon" />
            </span>
            <span className="mb-3 mb-md-0 text-body-secondary fs-4 text">
              Joshua Cooper
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                target="_blank"
                className="text-body-secondary"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/joshuacooper11/"
              >
                <i className="fa-brands fa-linkedin text-white fa-2xl"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://github.com/jcoop32"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-github text-white fa-2xl"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="mailto:joshuacooper332@gmail.com"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-envelope text-white fa-2xl "></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
