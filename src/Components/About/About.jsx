import SkillsContainer from '../SkillsContainer/SkillsContainer';

const About = () => {
  const skills = [
    { name: 'HTML', icon: 'https://icons8.com/icon/20909/html-5' },
    { name: 'CSS', icon: 'https://icons8.com/icon/21278/css3' },
    { name: 'Javascript', icon: 'https://icons8.com/icon/108784/javascript' },
    { name: 'MongoDB', icon: 'https://icons8.com/icon/74402/mongodb' },
    {
      name: 'Express.js',
      icon: 'https://icons8.com/icon/kg46nzoJrmTR/express-js',
    },
    { name: 'React.js', icon: 'https://icons8.com/icon/wPohyHO_qO1a/react' },
    { name: 'Node.js', icon: 'https://icons8.com/icon/hsPbhkOH4FMe/node-js' },
    { name: 'Python', icon: 'https://icons8.com/icon/13441/python' },
    { name: 'Git', icon: 'https://icons8.com/icon/20906/git' },
    // { name: 'PostgreSQL', icon: 'https://icons8.com/icon/20906/git' },
    // { name: 'MySQL', icon: 'https://icons8.com/icon/20906/git' },
  ];
  return (
    <section>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <SkillsContainer skills={skills} />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Me
            </h1>
            <p class="lead">
              I am a Full-Stack Software Engineer with a solid foundation in
              computer science, complemented by completion of a software
              engineering boot camp. With a quick learning ability, I excel at
              absorbing new technologies and adapting to changing landscapes.
              Strong problem-solving skills and perseverance enable me to
              overcome challenges and deliver effective solutions with
              remarkable results.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
