import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (  
    <div>
        <label>Search:</label>
        <input type='text' placeholder="Search for a video" onChange={(event) => setSearchTerm(event.target.value)}/>
    </div>
    );
}
 
export default SearchBar;