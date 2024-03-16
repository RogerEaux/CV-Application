function Study({ study, handlers }) {
  return (
    <>
      <label htmlFor="school">
        <div>
          <span>School</span>
        </div>
        <input
          type="text"
          placeholder="School of study"
          id="school"
          onChange={handlers.handleSchoolChange}
          value={study.school}
        />
      </label>
      <label htmlFor="degree">
        <div>
          <span>Degree/Title</span>
        </div>
        <input
          type="text"
          placeholder="Degree/Title of study"
          id="degree"
          onChange={handlers.handleDegreeChange}
          value={study.degree}
        />
      </label>
      <div className="date">
        <label htmlFor="date-from">
          <div>
            <span>From</span>
          </div>
          <input
            type="date"
            id="date-from"
            onChange={handlers.handleDateFromChange}
            value={study.dateFrom}
          />
        </label>
        <label htmlFor="date-to">
          <div>
            <span>To </span>
          </div>
          <input
            type="date"
            id="date-to"
            onChange={handlers.handleDateToChange}
            value={study.dateTo}
          />
        </label>
      </div>
      <label htmlFor="study-location">
        <div>
          <span>Location</span> <span>optional</span>
        </div>
        <input
          type="text"
          placeholder="Location of study"
          id="study-location"
          onChange={handlers.handleLocationChange}
          value={study.location}
        />
      </label>
    </>
  );
}

export default Study;
