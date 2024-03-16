function Study({ study, handlers }) {
  return (
    <>
      <label htmlFor="school">
        <span>School</span>
        <input
          type="text"
          placeholder="School of study"
          id="school"
          onChange={handlers.handleSchoolChange}
          value={study.school}
        />
      </label>
      <label htmlFor="degree">
        <span>Degree/Title</span>
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
          <span>From</span>
          <input
            type="date"
            id="date-from"
            onChange={handlers.handleDateFromChange}
            value={study.dateFrom}
          />
        </label>
        <label htmlFor="date-to">
          <span>To</span>
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
          <span>Location</span> <span>recommended</span>
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
