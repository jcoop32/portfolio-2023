import React from 'react';
import './icon-styles.css';
const SkillIcon = ({ skill }) => {
  return (
    <div className="m-2 icon-card col-3 d-flex justify-content-center flex-column align-items-center ">
      <img
        src={require(`../Skill-Icon/Images/${skill.name}.png`)}
        alt={`${skill.name} icon`}
        width={125}
        className="img-fluid skill-icon"
      />
      <p className="text-center text">{skill.name}</p>
    </div>
  );
};

export default SkillIcon;
