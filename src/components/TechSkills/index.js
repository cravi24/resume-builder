import { useState } from 'react';
import './index.scss';
import cogsIcon from '../../assets/svg/cogs.svg';
import editPencil from '../../assets/svg/pencil-f.svg';
import IconHeader from '../IconHeader';
import skills from './skills.json';
import Skills from '../Skills';

function TechSkills() {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  return (
    <div className="TechSkillsComponent">
      <div className="work-history">
        <IconHeader
          icon={cogsIcon}
          header="Skills"
          editPencil={editPencil}
          setIsEditModeOn={setIsEditModeOn}
        />
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default TechSkills;
