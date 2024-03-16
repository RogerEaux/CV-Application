function GeneralInfo({
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleAddressChange,
}) {
  return (
    <fieldset>
      <h1>General Information</h1>
      <label htmlFor="name">
        <div>
          <span>Full name</span>
        </div>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="email">
        <div>
          <span>Email</span> <span>recommended</span>
        </div>
        <input
          type="email"
          id="email"
          placeholder="ex. email@email.com"
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="phone">
        <div>
          <span>Phone number</span> <span>recommended</span>
        </div>
        <input
          type="tel"
          id="phone"
          placeholder="10 digits phone number"
          onChange={handlePhoneChange}
        />
      </label>
      <label htmlFor="address">
        <div>
          <span>Address</span> <span>recommended</span>
        </div>
        <input
          type="text"
          id="address"
          placeholder="City, Country"
          onChange={handleAddressChange}
        />
      </label>
    </fieldset>
  );
}

export default GeneralInfo;
