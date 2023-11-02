import React, { useState } from 'react';
import AboutMe from './AboutMe';
import MyTown from './MyTown';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <a onClick={() => handlePageChange('aboutMe')}>ABOUT ME</a>
        <a onClick={() => handlePageChange('myTown')}>MY TOWN</a>
      </nav>
      {currentPage === 'aboutMe' ? <AboutMe /> : null}
      {currentPage === 'myTown' ? <MyTown /> : null}
    </div>
  );
}

export default App;
