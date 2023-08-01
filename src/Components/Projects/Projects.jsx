import './Projects.css';

const Projects = () => {
  return (
    <section className="bg-body-tertiary p-5" id="projects">
      <h1 className="container">Projects</h1>
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0">
            {/* Project 1 */}
            <div className="card mb-3 w-100">
              <div className="row g-2">
                <div className="col-md-6">
                  <img
                    src={require('./Screenshots/shoeBox.png')}
                    className="img-fluid rounded-start"
                    alt="ShoeBox screenshot"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body mt-5">
                    <h5 className="card-title">ShoeBox</h5>
                    <p className="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary mt-3 me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/jcoop32/shoecollector"
                      className="btn btn-primary mt-3 "
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* Project 2 */}
            <div className="card mb-3 w-100">
              <div className="row g-2">
                <div className="col-md-6">
                  <img
                    src={require('./Screenshots/stocktrackr.png')}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body mt-5">
                    <h5 className="card-title">StockTrackr</h5>
                    <p className="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a
                      href="https://rocky-beyond-05208-0615d6b7d815.herokuapp.com/"
                      className="btn btn-primary mt-3 me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/jcoop32/stock-tracker"
                      className="btn btn-primary mt-3 "
                      rel="noopener noreferrer"
                    >
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="card mb-3 w-100">
              <div className="row g-2">
                <div className="col-md-6">
                  <img
                    src={require('./Screenshots/shoeBox.png')}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body mt-5">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary mt-3 me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary mt-3 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
