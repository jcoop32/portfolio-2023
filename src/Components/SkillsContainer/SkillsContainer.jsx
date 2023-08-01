import SkillIcon from '../Skill-Icon/Skill-Icon';

const SkillsContainer = ({ skills }) => {
  const skill = skills.map((s, idx) => <SkillIcon skill={s} key={idx} />);
  return (
    <>
      <h3 className="text-center">My Skills</h3>
      <div className="d-flex flex-wrap align-content-center justify-content-center">
        {skill}
      </div>
    </>
  );
};

export default SkillsContainer;
