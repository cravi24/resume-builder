import './index.scss';

function FontSelector({ setFont }) {
  return (
    <div className="FontSelectorComponent">
      <label htmlFor="current-font">Select font:</label>
      <select
        name="current-font"
        id="current-font"
        onChange={() => setFont(document.getElementById('current-font').value)}
      >
        <option value="Rubik">Rubik</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Segoe UI">Segoe UI</option>
        <option value="Roboto">Roboto</option>
        <option value="Helvetica Neue">Helvetica Neue</option>
        <option value="sans-serif">Sans-serif</option>
        <option value="Droid Sans">Droid Sans</option>
        <option value="Fira Sans">Fira Sans</option>
      </select>
    </div>
  );
}

export default FontSelector;
