import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Hier wird die CSS-Datei importiert
import Searchbar from "./Searchbar.jsx";
import Sidebar from "./Sidebar.jsx";
import MarkdownFeld from "./assets/MarkdownFeld.jsx"; // Stelle sicher, dass der Pfad korrekt ist

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app-container" style={{display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'}}>  {/* Container für das Layout */}
      <Sidebar />
      <MarkdownFeld />
      <div className="main-content">
        <Searchbar />
      </div>
    </div>
  </StrictMode>
);
