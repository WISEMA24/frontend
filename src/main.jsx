import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Hier wird die CSS-Datei importiert
import Searchbar from "./Searchbar.jsx";
import Sidebar from "./Sidebar.jsx";
import MarkdownFeld from "./assets/MarkdownFeld.jsx"; // Stelle sicher, dass der Pfad korrekt ist

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app-container">  {/* Container für das Layout */}
      <Sidebar />
      <div className="main-content">
        <Searchbar />
        <MarkdownFeld />  {/* Dein Markdown-Feld */}
      </div>
    </div>
  </StrictMode>
);
