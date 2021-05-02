import emptyCirle from '../../assets/svg/circle.svg';
import filledCirle from '../../assets/svg/circle-f.svg';

import "./index.scss";

function Skills({ skills }) {
  return (
    <div className="SkillsComponent">
      {skills.map((skill) => {
        return (
          <div className="skill">
            {skill.name}
            <div>
              {[...Array(parseInt(skill.rating))].map((item) => (
                <img src={filledCirle} alt="tech skills icon" />
              ))}
              {[...Array(parseInt(5 - skill.rating))].map((item) => (
                <img src={emptyCirle} alt="tech skills icon" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
