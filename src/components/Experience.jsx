import Buttons from './Buttons';
import Work from './Work';

function Experience({ experience, editedID, handlers }) {
  return (
    <fieldset>
      <h1>Experience</h1>
      {editedID ? (
        <>
          <Work
            work={experience.find((ex) => ex.id === editedID)}
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
            {experience.map((work) => {
              return (
                <li key={work.id} onClick={handlers.handleEdit}>
                  <p data-id={work.id}>{work.company}</p>
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

export default Experience;
