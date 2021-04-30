import { useState } from 'react';
import './index.scss';
import cogsIcon from '../../assets/svg/cogs.svg';
import editPencil from '../../assets/svg/pencil-f.svg';
import emptyCirle from '../../assets/svg/circle.svg';
import filledCirle from '../../assets/svg/circle-f.svg';
import IconHeader from '../IconHeader';

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

        <div className="skill">
          Javascript
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
        <div className="skill">
          HTML
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
        <div className="skill">
          CSS
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
        <div className="skill">
          React
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
        <div className="skill">
          Git
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
        <div className="skill">
          JIRA
          <div>
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={filledCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
            <img src={emptyCirle} alt="tech skills icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
