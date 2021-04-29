import './index.scss';
import flagIcon from '../../assets/svg/flag.svg';
import editPencil from '../../assets/svg/pencil-f.svg';
import emptyCirle from '../../assets/svg/circle.svg';
import filledCirle from '../../assets/svg/circle-f.svg';

function Language() {
  return (
    <div className="LanguageComponent">
      <div className="container-headers">
        <div className="header-with-icon">
          <img src={flagIcon} alt="language icon" />
          <div className="">Language</div>
        </div>
        <img src={editPencil} alt="d" />
      </div>

      <div className="skill">
        English
        <div>
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
        </div>
      </div>
      <div className="skill">
        Hindi
        <div>
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
          <img src={filledCirle} alt="tech skills icon" />
        </div>
      </div>
      <div className="skill">
        German
        <div>
          <img src={filledCirle} alt="tech skills icon" />
          <img src={emptyCirle} alt="tech skills icon" />
          <img src={emptyCirle} alt="tech skills icon" />
          <img src={emptyCirle} alt="tech skills icon" />
          <img src={emptyCirle} alt="tech skills icon" />
        </div>
      </div>
    </div>
  );
}

export default Language;
