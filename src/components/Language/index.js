import './index.scss';
import flagIcon from '../../assets/svg/flag.svg';
import editPencil from '../../assets/svg/pencil-f.svg';
import IconHeader from '../IconHeader';

import skills from './skills.json';
import Skills from '../Skills';

function Language() {
  return (
    <div className="LanguageComponent">
      <IconHeader
        icon={flagIcon}
        header="Language"
        editPencil={editPencil}
        setIsEditModeOn={() => {}}
      />
      <Skills skills={skills} />
    </div>
  );
}

export default Language;
