import './SideBarSocials.css';

const SideBarSocials = () => {
  return (
    <div className="icon-bar">
      <a
        href="https://www.linkedin.com/in/joshuacooper11/"
        className="linkedin"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin fa-lg"></i>
      </a>
      <a
        href="https://github.com/jcoop32"
        className="github"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github fa-lg"></i>
      </a>
      <a
        href="mailto:joshuacooper332@gmail.com"
        className="email"
        target="_black"
        rel="noopener noreferrer"
      >
        <i className="fa fa-envelope fa-lg"></i>
      </a>
    </div>
  );
};

export default SideBarSocials;
