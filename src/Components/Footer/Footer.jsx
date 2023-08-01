import './Footer.css';

const Footer = () => {
  return (
    <section id="footer">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img src={require('./me.png')} alt="Me" className="logo-icon" />
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary fs-4 text">
              Joshua Cooper
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a
                target="_blank"
                class="text-body-secondary"
                href="https://www.linkedin.com/in/joshuacooper11/"
              >
                <i class="fa-brands fa-linkedin text-white fa-2xl"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="https://github.com/jcoop32"
                target="_blank"
              >
                <i class="fa-brands fa-github text-white fa-2xl"></i>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="text-body-secondary"
                href="mailto:joshuacooper332@gmail.com"
              >
                <i class="fa-regular fa-envelope text-white fa-2xl "></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
