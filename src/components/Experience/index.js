import './index.scss';

function Experience({ experience }) {
  return (
    <div className="ExperienceComponent">
      <div className="left-column">
        <span>{experience.startDuration} -</span>
        <br />
        <span>{experience.endDuration}</span>
      </div>
      <div className="right-column">
        <div className="title">{experience.title}</div>
        <span>{experience.subtitle}</span>
        <ul>
          {experience.responsibilities && experience.responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;