const SkillIcon = ({ skill }) => {
  return (
    <div className="m-2">
      <img
        src={require(`../Skill-Icon/Images/${skill.name}.png`)}
        alt={`${skill.name} icon`}
        width={150}
        className="img-fluid skill-icon"
      />
      <p className="text-center">{skill.name}</p>
    </div>
  );
};

export default SkillIcon;
