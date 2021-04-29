import Contact from '../../components/Contact';
import Introduction from '../../components/Introduction';
import TechSkills from '../../components/TechSkills';
import Language from '../../components/Language';
import WorkHistoryList from '../../components/WorkHistoryList';
import EducationList from '../../components/EducationList';

import './index.scss';

const ResumeBuilderPage = () => {
  return (
    <div className="resume-container">
      <Introduction />
      <Contact />
      <div className="work">
        <WorkHistoryList />
      </div>
      <div className="education">
        <EducationList />
      </div>
      <div className="skills">
        <TechSkills />
        <Language />
      </div>
    </div>
  );
};

export default ResumeBuilderPage;
