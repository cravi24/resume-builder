import './index.scss';
import userIcon from '../../assets/svg/user.svg';
import editPencil from '../../assets/svg/pencil-f.svg';

function Contact() {
  return (
    <div className="contact">
      <div className="container-headers">
        <div className="header-with-icon">
          <img src={userIcon} alt="work history icon" />
          <div className="">Contact</div>
        </div>
        <img src={editPencil} alt="Edit contact" />
      </div>
      <div className="contact-header">Address</div>
      <p>Berlin, BE, 12059</p>
      <div className="contact-header">Phone</div>
      <p>017635091028</p>
      <div className="contact-header">Email</div>
      <span>dummy@gmail.com</span>
    </div>
  );
}

export default Contact;
