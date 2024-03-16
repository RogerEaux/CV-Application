import './Curriculum.css';
import emailImage from './assets/email.svg';
import phoneImage from './assets/phone.svg';
import addressImage from './assets/address.svg';

function Curriculum({ general }) {
  return (
    <>
      <div className="general-info">
        <p>{general.name}</p>
        <div className="not-names">
          {general.email ? (
            <div>
              <img src={emailImage} alt="" />
              <p>{general.email}</p>
            </div>
          ) : null}
          {general.phone ? (
            <div>
              <img src={phoneImage} alt="" />
              <p>{general.phone}</p>
            </div>
          ) : null}
          {general.address ? (
            <div>
              <img src={addressImage} alt="" />
              <p>{general.address}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Curriculum;
