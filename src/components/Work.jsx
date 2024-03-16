function Work({ work, handlers }) {
  return (
    <>
      <label htmlFor="company">
        <span>Company</span>
        <input
          type="text"
          placeholder="Company name"
          id="company"
          onChange={handlers.handleCompanyChange}
          value={work.company}
        />
      </label>
      <label htmlFor="position">
        <span>Position title</span>
        <input
          type="text"
          placeholder="Position title"
          id="position"
          onChange={handlers.handlePositionChange}
          value={work.position}
        />
      </label>
      <div className="date">
        <label htmlFor="date-from">
          <span>From</span>
          <input
            type="date"
            id="date-from"
            onChange={handlers.handleDateFromChange}
            value={work.dateFrom}
          />
        </label>
        <label htmlFor="date-to">
          <span>To</span>
          <input
            type="date"
            id="date-to"
            onChange={handlers.handleDateToChange}
            value={work.dateTo}
          />
        </label>
      </div>
      <label htmlFor="responsibilities">
        <div>
          <span>Main responsibilities</span> <span>recommended</span>
        </div>
        <textarea
          placeholder="Main responsibilities of job"
          id="responsibilities"
          onChange={handlers.handleResponsibilitiesChange}
          value={work.responsibilities}
        />
      </label>
    </>
  );
}

export default Work;
