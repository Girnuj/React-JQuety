import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <a className='navbar-brand' href='/'> Weather App</a>
             <SearchBar onSearch={onSearch}/>
        </div>
    </nav>

    </div>
  );
};

export default Nav;
