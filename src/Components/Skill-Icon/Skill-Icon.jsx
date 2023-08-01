import React from 'react';
import './icon-styles.css';
const SkillIcon = ({ skill }) => {
  return (
    <div className="m-2 icon-card">
      <img
        src={require(`../Skill-Icon/Images/${skill.name}.png`)}
        alt={`${skill.name} icon`}
        width={125}
        className="img-fluid skill-icon"
      />
      <p className="text-center">{skill.name}</p>
    </div>
  );
};

export default SkillIcon;
