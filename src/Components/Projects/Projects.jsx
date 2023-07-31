import './Projects.css';

const Projects = () => {
  return (
    <section className="bg-body-tertiary p-5" id="projects">
      <h1 className="container">Projects</h1>
      <div class="album py-5 ">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0">
            {/* Project 1 */}
            <div class="card mb-3 w-100">
              <div class="row g-2">
                <div class="col-md-6">
                  <img
                    src={require('./Screenshots/shoeBox.png')}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body mt-5">
                    <h5 class="card-title">ShoeBox</h5>
                    <p class="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a href="#" class="btn btn-primary mt-3 me-3">
                      Live Link
                    </a>
                    <a href="#" class="btn btn-primary mt-3 ">
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* Project 2 */}
            <div class="card mb-3 w-100">
              <div class="row g-2">
                <div class="col-md-6">
                  <img
                    src={require('./Screenshots/stocktrackr.png')}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body mt-5">
                    <h5 class="card-title">StockTrackr</h5>
                    <p class="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a href="#" class="btn btn-primary mt-3 me-3">
                      Live Link
                    </a>
                    <a href="#" class="btn btn-primary mt-3 ">
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div class="card mb-3 w-100">
              <div class="row g-2">
                <div class="col-md-6">
                  <img
                    src={require('./Screenshots/shoeBox.png')}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="card-body mt-5">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text mt-3">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a href="#" class="btn btn-primary mt-3 me-3">
                      Live Link
                    </a>
                    <a href="#" class="btn btn-primary mt-3 ">
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
