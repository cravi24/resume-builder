import Contact from '../components/Contact';
import Introduction from '../components/Introduction';
import TechSkills from '../components/TechSkills';
import Language from '../components/Language';
import WorkHistoryList from '../components/WorkHistoryList';
import EducationList from '../components/Education';

const ResumeBuilderPage = () => {
  return (
    <div className="container">
      <Introduction />
      <div className="resume-body">
        <div className="resume-right-column">
          <WorkHistoryList />
          <br /><br /><br />
          <EducationList />
        </div>
        <div className="resume-left-column">
          <Contact />
          <TechSkills />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;
