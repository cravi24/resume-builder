import './index.scss';

function Skills({ skills }) {
  return (
    <div className="SkillsComponent">
      {skills.map((skill) => {
        return (
          <div className="skill">
            {skill.name}
            <div className="rating">
              {[...Array(parseInt(skill.rating))].map((item) => (
                <div className="filled-circle" />
              ))}
              {[...Array(parseInt(5 - skill.rating))].map((item) => (
                <div className="empty-circle" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
