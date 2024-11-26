import { FaSave } from "react-icons/fa";
function Toolbar({ onSave }) {
  return (
      <button style={{ display: "flex", flexDirection: "row", gap: "10px" }} onClick={onSave}>
        <FaSave /> Speichern
      </button>
  );
}

export default Toolbar;
