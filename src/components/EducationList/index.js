import { useState } from 'react';
import './index.scss';
import editPencil from '../../assets/svg/pencil-f.svg';
import saveIcon from '../../assets/svg/save-f.svg';
import boxIcon from '../../assets/svg/degree.svg';
import educationDegrees from './education.json';

function EducationList() {
  const [educationDegreeArr] = useState(educationDegrees);
  return (
    <div className="EducationListComponent">
      <div className="container-headers">
        <div className="header-with-icon">
          <img src={boxIcon} alt="education icon" />
          <div className="">Education</div>
        </div>
        <img src={editPencil} alt="d" />
      </div>
      {educationDegreeArr.map((workItem, i) => (
        <div className="work-history" key={i}>
          <div className="left-column">
            <span>{workItem.startDuration} -</span>
            <br />
            <span>{workItem.endDuration}</span>
          </div>
          <div className="right-column">
            <div className="title">{workItem.degree}</div>
            <span>{workItem.instituteName}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationList;
