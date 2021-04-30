import editPencil from '../../assets/svg/pencil-f.svg';
import saveIcon from '../../assets/svg/save-f.svg';
import boxIcon from '../../assets/svg/box.svg';
import workExperienceList from './work-history.json';
import { useState } from 'react';
import Experience from '../Experience';
import IconHeader from '../IconHeader';

function WorkHistoryList() {
  const [workExperienceArr, setWorkExperienceArr] = useState(
    workExperienceList
  );
  return (
    <div className="WorkHistoryListComponent">
      <IconHeader
          icon={boxIcon}
          header="Work History"
          editPencil={editPencil}
          setIsEditModeOn={() => {}}
        />
      {workExperienceArr.map((workItem, i) => (
        <Experience experience={workItem} key={i} />
      ))}
    </div>
  );
}

export default WorkHistoryList;
