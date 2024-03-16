function GeneralInfo({ general, handlers }) {
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
          onChange={handlers.handleNameChange}
          value={general.name}
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
          onChange={handlers.handleEmailChange}
          value={general.email}
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
          onChange={handlers.handlePhoneChange}
          value={general.phone}
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
          onChange={handlers.handleAddressChange}
          value={general.address}
        />
      </label>
    </fieldset>
  );
}

export default GeneralInfo;
