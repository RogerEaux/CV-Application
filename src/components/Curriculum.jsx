import emailImage from '../assets/email.svg';
import phoneImage from '../assets/phone.svg';
import addressImage from '../assets/address.svg';
import '../styles/Curriculum.css';

function Curriculum({ general, education, experience }) {
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
      <div className="education">
        <h1>Education</h1>
        <ul>
          {education.map((study) => {
            return (
              <li key={study.id}>
                <h2>{study.school}</h2>
                <div className="study-details">
                  <h3>{study.degree}</h3>
                  <p>
                    <span>{study.dateFrom}</span> - <span>{study.dateTo}</span>
                  </p>
                </div>
                {study.location ? <h3>{study.location}</h3> : null}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="experience">
        <h1>Experience</h1>
        <ul>
          {experience.map((work) => {
            return (
              <li key={work.id}>
                <h2>{work.company}</h2>
                <div className="work-details">
                  <h3>{work.position}</h3>
                  <p>
                    <span>{work.dateFrom}</span> - <span>{work.dateTo}</span>
                  </p>
                </div>
                {work.responsibilities ? <p>{work.responsibilities}</p> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Curriculum;
