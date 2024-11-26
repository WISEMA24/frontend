import './Dashboard.css';
import { useState } from 'react';

import logo from './assets/Eischhoarnschen.png';

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
            
                <img class ="logo"src={logo} alt="Logo" width ="75" height ="50" />
               
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
                
                <b className="neueNotiz" onClick={handleNeueNotiz}>Neue Notiz</b>
               
            </div>
            
        </>
    );
}

export default Searchbar;
