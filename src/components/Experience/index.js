import { useEffect, useState } from 'react';
import removeIcon from '../../assets/svg/minus-circle.svg';
import editIcon from '../../assets/svg/pencil-f.svg';
import EditExperience from './EditExperience';
import './index.scss';

function Experience({ experience, updateWorkExperience }) {
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  useEffect(() => {
    setIsEditModeOn(experience.editModeOn);
  }, [experience]);

  const removeExperience = () => {
    updateWorkExperience((prev) =>
      prev.filter(
        (item) =>
          item.title !== experience.title &&
          item.subtitle !== experience.subtitle
      )
    );
  };

  const updateExperience = (updatedExperience) => {
    updateWorkExperience((prev) =>
      prev.map((item) => {
        if (
          item.title === experience.title &&
          item.subtitle === experience.subtitle
        ) {
          return updatedExperience;
        }
        return item;
      })
    );
  };

  if (isEditModeOn)
    return (
      <EditExperience
        experience={experience}
        setIsEditModeOn={setIsEditModeOn}
        updateExperience={updateExperience}
      />
    );
  return (
    <div className="ExperienceComponent">
      <div className="left-column">
        <span>{experience.startDuration} -</span>
        <br />
        <span>{experience.endDuration}</span>
      </div>
      <div className="right-column">
        <div className="title">
          {experience.title}
          <div>
            <img
              className="edit-icon"
              src={removeIcon}
              alt="Remove icon"
              onClick={removeExperience}
            />
            <img
              className="edit-icon"
              src={editIcon}
              alt="Edit icon"
              onClick={() => setIsEditModeOn(true)}
            />
          </div>
        </div>
        <span>{experience.subtitle}</span>
        <ul>
          {experience.responsibilities &&
            experience.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
