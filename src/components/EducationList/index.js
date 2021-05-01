import { useState } from 'react';
import './index.scss';
import addIcon from '../../assets/svg/plus-circle.svg';
import saveIcon from '../../assets/svg/save-f.svg';
import boxIcon from '../../assets/svg/degree.svg';
import educationDegrees from './education.json';
import Experience from '../Experience';
import IconHeader from '../IconHeader';

function EducationList() {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [educationDegreeArr] = useState(educationDegrees);

  return (
    <div className="EducationListComponent">
      <IconHeader
        icon={boxIcon}
        header="Education"
        editPencil={addIcon}
        setIsEditModeOn={setIsEditModeOn}
      />
      {educationDegreeArr.map((degree, i) => (
        <Experience experience={degree} key={i} />
      ))}
    </div>
  );
}

export default EducationList;
