import './index.scss';
import editPencil from '../../assets/svg/pencil-f.svg';
import saveIcon from '../../assets/svg/save-f.svg';
import boxIcon from '../../assets/svg/box.svg';
import workExperienceList from './work-history.json';
import { useState } from 'react';

function WorkHistoryList() {
  const [workExperienceArr, setWorkExperienceArr] = useState(
    workExperienceList
  );
  return (
    <div className="WorkHistoryListComponent">
      <div className="container-headers">
        <div className="header-with-icon">
          <img src={boxIcon} alt="work history icon" />
          <div className="">Work History</div>
        </div>
        <img src={editPencil} alt="d" />
      </div>
      {workExperienceArr.map((workItem, i) => (
        <div className="work-history" key={i}>
          <div className="left-column">
            <span>{workItem.startDuration} -</span><br/>
            <span>{workItem.endDuration}</span>
          </div>
          <div className="right-column">
            <div className="title">{workItem.title}</div>
            <span>{workItem.companyName}</span>
            <ul>
              {workItem.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkHistoryList;
