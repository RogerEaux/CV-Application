import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import Curriculum from './Curriculum';
import '../styles/Content.css';

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
      dateFrom: '2018-03-15',
      dateTo: '2022-03-15',
      location: 'CheeseLand',
    },
  ];
  const initialExperience = [
    {
      id: 1,
      company: 'Cheese Inc.',
      position: 'Cheese Analyst',
      dateFrom: '2022-03-15',
      dateTo: '2024-03-15',
      responsibilities:
        'As a cheese analyst, my main responsibilities include but are not limited \
        to cheese consistency analysis cheese tasting and cheese quality control',
    },
  ];
  const [general, setGeneral] = useState(initialGeneral);
  const [education, setEducation] = useState(initialEducation);
  const [educationEditID, setEducationEditID] = useState(null);
  const [educationID, setEducationID] = useState(2);
  const [experience, setExperience] = useState(initialExperience);
  const [experienceEditID, setExperienceEditID] = useState(null);
  const [experienceID, setExperienceID] = useState(2);

  // General

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

  // Education

  function handleEditStudy(e) {
    setEducationEditID(parseInt(e.target.dataset.id));
  }

  function handleExitStudy() {
    setEducationEditID(null);
  }

  function handleDeleteStudy() {
    setEducation(education.filter((study) => study.id !== educationEditID));
    handleExitStudy();
  }

  function handleAddStudy() {
    setEducation([
      ...education,
      {
        id: educationID,
        school: 'New Study',
        degree: 'Pie Studies',
        dateFrom: '2015-03-14',
        dateTo: '2016-03-14',
        location: '',
      },
    ]);
    setEducationID(educationID + 1);
    setEducationEditID(educationID);
  }

  function handleSchoolChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditID);
    const newStudy = { ...oldStudy, school: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleDegreeChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditID);
    const newStudy = { ...oldStudy, degree: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleStudyDateFromChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditID);
    const newStudy = { ...oldStudy, dateFrom: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleStudyDateToChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditID);
    const newStudy = { ...oldStudy, dateTo: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  function handleStudyLocationChange(e) {
    const oldStudy = education.find((study) => study.id === educationEditID);
    const newStudy = { ...oldStudy, location: e.target.value };

    setEducation(education.toSpliced(education.indexOf(oldStudy), 1, newStudy));
  }

  // Experience

  function handleEditWork(e) {
    setExperienceEditID(parseInt(e.target.dataset.id));
  }

  function handleExitWork() {
    setExperienceEditID(null);
  }

  function handleDeleteWork() {
    setExperience(experience.filter((work) => work.id !== experienceEditID));
    handleExitWork();
  }

  function handleAddWork() {
    setExperience([
      ...experience,
      {
        id: experienceID,
        company: 'New Company',
        position: 'Pie-ologist',
        dateFrom: '2015-03-14',
        dateTo: '2016-03-14',
        responsibilities: '',
      },
    ]);
    setExperienceID(experienceID + 1);
    setExperienceEditID(experienceID);
  }

  function handleCompanyChange(e) {
    const oldWork = experience.find((work) => work.id === experienceEditID);
    const newWork = { ...oldWork, company: e.target.value };

    setExperience(
      experience.toSpliced(experience.indexOf(oldWork), 1, newWork),
    );
  }

  function handlePositionChange(e) {
    const oldWork = experience.find((work) => work.id === experienceEditID);
    const newWork = { ...oldWork, position: e.target.value };

    setExperience(
      experience.toSpliced(experience.indexOf(oldWork), 1, newWork),
    );
  }

  function handleWorkDateFromChange(e) {
    const oldWork = experience.find((work) => work.id === experienceEditID);
    const newWork = { ...oldWork, dateFrom: e.target.value };

    setExperience(
      experience.toSpliced(experience.indexOf(oldWork), 1, newWork),
    );
  }

  function handleWorkDateToChange(e) {
    const oldWork = experience.find((work) => work.id === experienceEditID);
    const newWork = { ...oldWork, dateTo: e.target.value };

    setExperience(
      experience.toSpliced(experience.indexOf(oldWork), 1, newWork),
    );
  }

  function handleResponsibilitiesChange(e) {
    const oldWork = experience.find((work) => work.id === experienceEditID);
    const newWork = { ...oldWork, responsibilities: e.target.value };

    setExperience(
      experience.toSpliced(experience.indexOf(oldWork), 1, newWork),
    );
  }

  return (
    <>
      <section className="editables">
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
          editedID={educationEditID}
          handlers={{
            handleEdit: handleEditStudy,
            handleDelete: handleDeleteStudy,
            handleExit: handleExitStudy,
            handleAdd: handleAddStudy,
            handleSchoolChange: handleSchoolChange,
            handleDegreeChange: handleDegreeChange,
            handleDateFromChange: handleStudyDateFromChange,
            handleDateToChange: handleStudyDateToChange,
            handleLocationChange: handleStudyLocationChange,
          }}
        />
        <Experience
          experience={experience}
          editedID={experienceEditID}
          handlers={{
            handleEdit: handleEditWork,
            handleDelete: handleDeleteWork,
            handleExit: handleExitWork,
            handleAdd: handleAddWork,
            handleCompanyChange: handleCompanyChange,
            handlePositionChange: handlePositionChange,
            handleDateFromChange: handleWorkDateFromChange,
            handleDateToChange: handleWorkDateToChange,
            handleResponsibilitiesChange: handleResponsibilitiesChange,
          }}
        />
      </section>
      <section className="displayables">
        <Curriculum
          general={general}
          education={education}
          experience={experience}
        />
      </section>
    </>
  );
}

export default Content;
