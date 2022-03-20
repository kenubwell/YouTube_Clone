import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {


    return (  
    <div className='search-contain'>
        <form className='search-form-contain'>
            <label className='search-label'>Search:</label>
            <input type='text' placeholder="Search for a video..." className='search-input'/>
            <button className='search-button'>Search</button>
        </form>
    </div>
    );
}
 
export default SearchBar;