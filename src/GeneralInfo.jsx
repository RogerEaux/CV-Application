function GeneralInfo() {
  return (
    <section className="general-info">
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
          />
        </label>
        <label htmlFor="email">
          <div>
            <span>Email</span> <span>recommended</span>
          </div>
          <input type="email" id="email" placeholder="ex. email@email.com" />
        </label>
        <label htmlFor="phone">
          <div>
            <span>Phone number</span> <span>recommended</span>
          </div>
          <input type="tel" id="phone" placeholder="10 digits phone number" />
        </label>
        <label htmlFor="address">
          <div>
            <span>Address</span> <span>recommended</span>
          </div>
          <input type="text" id="address" placeholder="City, Country" />
        </label>
      </fieldset>
    </section>
  );
}

export default GeneralInfo;
