import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Curriculum from './Curriculum';
import './Content.css';

function Content() {
  const initialGeneral = {
    name: 'Juan',
    email: 'juan@juan.com',
    phone: '33 44 55 66 77',
    address: 'Juan, Mexico',
  };
  const initialEducation = [
    {
      id: 1,
      school: 'University of Cheese',
      degree: 'Cheesology',
      dateFrom: '2020-03-15',
      dateTo: '2024-03-15',
      location: 'CheeseLand',
    },
  ];
  const [general, setGeneral] = useState(initialGeneral);
  const [education, setEducation] = useState(initialEducation);
  const [educationEditedID, setEducationEditedID] = useState(null);
  // const [educationID, setEducationID] = useState(2);

  function handleNameChange(e) {
    setGeneral({ ...general, name: e.target.value });
  }

  function handleEmailChange(e) {
    setGeneral({ ...general, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setGeneral({ ...general, phone: e.target.value });
  }

  function handleAddressChange(e) {
    setGeneral({ ...general, address: e.target.value });
  }

  function handleEditStudy(e) {
    setEducationEditedID(parseInt(e.target.dataset.id));
  }

  function handleSchoolChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditedID);
    const newStudy = { ...oldStudy, school: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleDegreeChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditedID);
    const newStudy = { ...oldStudy, degree: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleDateFromChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditedID);
    const newStudy = { ...oldStudy, dateFrom: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleDateToChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditedID);
    const newStudy = { ...oldStudy, dateTo: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleStudyLocationChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditedID);
    const newStudy = { ...oldStudy, location: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  return (
    <>
      <section className="editables">
        <form action="">
          <GeneralInfo
            general={general}
            handlers={{
              handleNameChange: handleNameChange,
              handleEmailChange: handleEmailChange,
              handlePhoneChange: handlePhoneChange,
              handleAddressChange: handleAddressChange,
            }}
          />
          <Education
            education={education}
            editedID={educationEditedID}
            handlers={{
              handleEditStudy: handleEditStudy,
              handleSchoolChange: handleSchoolChange,
              handleDegreeChange: handleDegreeChange,
              handleDateFromChange: handleDateFromChange,
              handleDateToChange: handleDateToChange,
              handleLocationChange: handleStudyLocationChange,
            }}
          />
        </form>
      </section>
      <section className="displayable">
        <Curriculum general={general} education={education} />
      </section>
    </>
  );
}

export default Content;
