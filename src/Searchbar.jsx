import './App.css';
import { useState } from 'react';

function Searchbar() {
    const [searchInput, setSearchInput] = useState("");


    const handleSearch = () => {
            console.log(searchInput);
        
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleBearbeiten = () => {
        
    };
    const handleLoeschen = () => {
        
    };
    const handleNeueNotiz = () => {
        
    };

    return (
        <>
            <div className="topnav">
                        <div className="suchDiv">
                            <input 
                                className="search" 
                                value={searchInput} 
                                onChange={(e) => setSearchInput(e.target.value)} 
                                onKeyDown={handleKeyDown}
                                placeholder="Suche..." 
                            />
                            <button className="suchen-button" href="#suche" onClick={handleSearch}>Suchen</button>
                        </div>
                <a href="#bearbeiten" onClick={handleBearbeiten}>Bearbeiten</a> 
                <b className="neueNotiz" onClick={handleNeueNotiz}>Neue Notiz</b>
                <a href="#loeschen" onClick={handleLoeschen}>Löschen</a>
            </div>
        </>
    );
}

export default Searchbar;
