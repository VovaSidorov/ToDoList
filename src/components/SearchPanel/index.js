import React from 'react';
import './style.css'

const SearchPanel = () => {
    const searchText = 'Type here to search';
    return (
        <input className="search-panel" placeholder={searchText} />
    );
};

export default SearchPanel;