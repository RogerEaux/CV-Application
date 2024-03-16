import Study from './Study';

function Education({ education, editedID, handlers }) {
  return (
    <fieldset>
      <h1>Education</h1>
      {editedID ? (
        <Study
          study={education.find((ed) => ed.id === editedID)}
          handlers={handlers}
        />
      ) : (
        <ul>
          {education.map((study) => {
            return (
              <li key={study.id} onClick={handlers.handleEditStudy}>
                <p data-id={study.id}>{study.school}</p>
              </li>
            );
          })}
        </ul>
      )}
    </fieldset>
  );
}

export default Education;
