export default function Editor(note = {}) {
    return `
      <div>
        <textarea id="note-content">${note.content || ''}</textarea>
        <button onclick="saveNote()">Speichern</button>
        <button onclick="closeEditor()">Abbrechen</button>
      </div>
    `;
  }
  
  window.saveNote = function () {
    const content = document.getElementById('note-content').value;
    console.log('Notiz gespeichert:', content);
  };
  