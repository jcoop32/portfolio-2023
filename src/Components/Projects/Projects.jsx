import './Projects.css';

const Projects = () => {
  return (
    <section className="bg-body-tertiary p-5" id="projects">
      <h1 className="container">Projects</h1>
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0">
            {/* Tweetter Project */}
            <div className="card mb-3 w-100">
              <div className="row g-2">
                <div className="col-md-6">
                  <img
                    src={require('./Screenshots/twetter.png')}
                    className="img-fluid rounded-start"
                    alt="Tweetter screenshot"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body mt-5">
                    <h5 className="card-title">Tweetter (Twitter Clone)</h5>
                    <p className="card-text mt-3">
                      Introducing Tweetter, a dynamic web app that reimagines
                      microblogging, harnessing the capabilities of Ruby, Ruby
                      on Rails, embedded Ruby, Bootstrap, and PostgreSQL.
                      Seamlessly navigate through a user-friendly interface
                      where interactions come to life, enabling you to
                      effortlessly craft and share your thoughts. Leveraging the
                      power of PostgreSQL, Tweetter offers a reliable and
                      scalable database backend.
                    </p>
                    <a
                      href="https://secret-ridge-86986-7b334cd5e048.herokuapp.com/"
                      className="btn btn-primary mt-3 me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/jcoop32/twitter-clone"
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
            {/* ShoeBox */}
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
                      Powered by Python and Django, ShoeBox provides a seamless
                      and user-friendly experience. Our use of PostgreSQL
                      ensures that your valuable data is stored securely, while
                      the sleek and modern Materialize CSS framework enhances
                      the website's visual appeal. Whether you're a seasoned
                      collector or just beginning your sneaker journey, ShoeBox
                      has something for everyone. Discover the latest releases,
                      manage your personal collection, and stay updated on
                      upcoming drops and restocks.
                    </p>
                    <a
                      href="https://shoecollector-shoebox-39b978c7d635.herokuapp.com/"
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
            {/* Stocktrackr */}
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
                      The ultimate website for users to stay informed and track
                      their favorite stocks in real-time. Built with MongoDB,
                      Express.js, and Node.js. Through seamless API integration,
                      we provide real-time stock prices, empowering you to make
                      well-informed decisions. The intuitive Materialize CSS
                      framework enhances the user experience, offering a modern
                      and user-friendly interface for effortless navigation.
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
            {/* Blackjack */}
            <div className="card mb-3 w-100">
              <div className="row g-2">
                <div className="col-md-6">
                  <img
                    src={require('./Screenshots/blackjack.png')}
                    className="img-fluid rounded-start"
                    alt="blackjack screenshot"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body mt-5">
                    <h5 className="card-title">Blackjack</h5>
                    <p className="card-text mt-3">
                      The perfect place to sharpen your blackjack skills! This
                      website represents my first side-project of an ambitious
                      developer who had recently conquered the fundamentals of
                      HTML, CSS, and JavaScript. Utilizing a tech stack,
                      including HTML, CSS, JavaScript, jQuery, and the Bootstrap
                      CSS framework, The website offers a user-friendly
                      interface and engaging features to help players of all
                      levels enhance their blackjack expertise.
                    </p>
                    <a
                      href="https://quiet-dieffenbachia-78d9d0.netlify.app/"
                      className="btn btn-primary mt-3 me-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                    <a
                      href="https://github.com/jcoop32/blackjack-browser"
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
