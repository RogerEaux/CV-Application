function Buttons({ handlers }) {
  return (
    <div className="buttons">
      <button onClick={handlers.handleDelete}>Delete</button>
      <button onClick={handlers.handleExit}>Confirm</button>
    </div>
  );
}

export default Buttons;
