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
  // const [educationID, setEducationID] = useState(2);
  const [education, setEducation] = useState(initialEducation);
  const [educationEditedID, setEducationEditedID] = useState(null);

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
    setEducation([
      ...education.filter((study) => !study.id === educationEditedID),
      {
        ...education.find((study) => study.id === educationEditedID),
        school: e.target.value,
      },
    ]);
  }

  function handleDegreeChange(e) {
    setEducation([
      ...education.filter((study) => !study.id === educationEditedID),
      {
        ...education.find((study) => study.id === educationEditedID),
        degree: e.target.value,
      },
    ]);
  }

  function handleDateFromChange(e) {
    setEducation([
      ...education.filter((study) => !study.id === educationEditedID),
      {
        ...education.find((study) => study.id === educationEditedID),
        dateFrom: e.target.value,
      },
    ]);
  }

  function handleDateToChange(e) {
    setEducation([
      ...education.filter((study) => !study.id === educationEditedID),
      {
        ...education.find((study) => study.id === educationEditedID),
        dateTo: e.target.value,
      },
    ]);
  }

  function handleStudyLocationChange(e) {
    setEducation([
      ...education.filter((study) => !study.id === educationEditedID),
      {
        ...education.find((study) => study.id === educationEditedID),
        location: e.target.value,
      },
    ]);
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
