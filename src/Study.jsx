function Study() {
  return (
    <>
      <label>
        <div>
          <span>School</span>
        </div>
        <input type="text" placeholder="School of study" />
      </label>
      <label>
        <div>
          <span>Degree/Title</span>
        </div>
        <input type="text" placeholder="Degree/Title of study" />
      </label>
      <div className="date">
        <label>
          <div>
            <span>From</span>
          </div>
          <input type="date" />
        </label>
        <label>
          <div>
            <span>To </span>
          </div>
          <input type="date" />
        </label>
      </div>
      <label>
        <div>
          <span>Location</span> <span>optional</span>
        </div>
        <input type="text" placeholder="Location of study" />
      </label>
    </>
  );
}

export default Study;
