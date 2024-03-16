import Buttons from './Buttons';
import Study from './Study';

function Education({ education, editedID, handlers }) {
  return (
    <fieldset>
      <h1>Education</h1>
      {editedID ? (
        <>
          <Study
            study={education.find((ed) => ed.id === editedID)}
            handlers={handlers}
          />
          <Buttons
            handlers={{
              handleDelete: handlers.handleDelete,
              handleExit: handlers.handleExit,
            }}
          />
        </>
      ) : (
        <>
          <ul>
            {education.map((study) => {
              return (
                <li key={study.id} onClick={handlers.handleEdit}>
                  <p data-id={study.id}>{study.school}</p>
                </li>
              );
            })}
          </ul>
          <button className="add-button" onClick={handlers.handleAdd}>
            + Add Study
          </button>
        </>
      )}
    </fieldset>
  );
}

export default Education;
