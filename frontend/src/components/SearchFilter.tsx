import React from 'react';
import "./SearchFilter.css"

const SearchFilter = () => {
    return (
        <div className="search-filter">
            <div className="search">
            <div className="search-icon"><i className="fa fa-search search-icon"></i></div>
            <div><input type="text" placeholder="Search Project" /></div>
            </div>
            <div>
                <button>Filter</button>
            </div>
        </div>
    );
};

export default SearchFilter;
