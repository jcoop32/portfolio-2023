import SideBarSocials from '../SideBarSocials/SideBarSocials';
import '../SideBarSocials/SideBarSocials.css';
import './Hero.css';
const Hero = () => {
  return (
    <>
      <SideBarSocials />
      <section className="hero-bg d-flex align-items-center justify-content-center bg-body-tertiary flex-column">
        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis">
            Hey 👋, I'm Joshua Cooper
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">A Full-Stack Developer</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="#projects">
                <button type="button" class="btn btn-primary btn-lg px-5 gap-3">
                  Projects
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-start arrow">
          <a href="#about" className="text-white">
            <i class="fa-solid fa-arrow-down fa-bounce fa-2xl"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
