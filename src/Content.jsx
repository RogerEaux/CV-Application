import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Curriculum from './Curriculum';
import './Content.css';

function Content() {
  const initialGeneral = {
    name: null,
    email: null,
    phone: null,
    address: null,
  };
  const [general, setGeneral] = useState(initialGeneral);

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

  return (
    <>
      <section className="editables">
        <form action="">
          <GeneralInfo
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handlePhoneChange={handlePhoneChange}
            handleAddressChange={handleAddressChange}
          />
          <Education />
        </form>
      </section>
      <section className="displayable">
        <Curriculum general={general} />
      </section>
    </>
  );
}

export default Content;
