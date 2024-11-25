import { getNotes } from '../services/api.js';

export default async function Dashboard() {
  const notes = await getNotes();
  return `
    <div>
      <h2>Notizen</h2>
      <ul>
        ${notes.map(note => `<li>${note.title}</li>`).join('')}
      </ul>
      <button onclick="window.openEditor()">Neue Notiz</button>
    </div>
  `;
}
