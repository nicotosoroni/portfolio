import QR from './assets/image-qr-code.png';
import './styles.css';

const QRComponent = () => {
  return (
    <div className="QRcontainer">
      <div className="QRbody">
        <img src={QR} alt="QR" />
        <div className="QRtitle">
          Improve your front-end skills by building projects
        </div>
        <div className="QRtext">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default QRComponent;
