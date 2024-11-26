import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownFeld.css';

function MarkdownFeld() {
    const [markdownContent, setMarkdownContent] = useState('');

    // Lädt eine lokale Markdown-Datei (oder du kannst auch einen API-Endpunkt verwenden)
    useEffect(() => {
        fetch('')  // Pfad zur Markdown-Datei
            .then(response => response.text())
            .then(data => setMarkdownContent(""));
    }, []);

    return (
        <div className="markdown-container">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
}

export default MarkdownFeld;
