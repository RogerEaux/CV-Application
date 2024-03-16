function Buttons({ handlers }) {
  return (
    <div className="buttons">
      <button onClick={handlers.handleDeleteStudy}>Delete</button>
      <button onClick={handlers.handleExitStudy}>Confirm</button>
    </div>
  );
}

export default Buttons;
