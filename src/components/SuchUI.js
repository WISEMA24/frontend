export default function SearchUI() {
    return `
      <div>
        <input id="search-input" type="text" placeholder="Nach Notizen suchen..." />
        <button onclick="searchNotes()">Suchen</button>
      </div>
    `;
  }
  
  window.searchNotes = function () {
    const query = document.getElementById('search-input').value;
    console.log('Suchanfrage:', query);
  };
  