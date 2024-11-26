import { FaSave } from 'react-icons/fa';
function Toolbar({ onSave }) {
    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {/* Andere Buttons */}
            <button onClick={onSave}><FaSave /> Speichern</button>
        </div>
    );
}


export default Toolbar
