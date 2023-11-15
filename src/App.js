import React, { useState } from 'react';
import AboutMe from './AboutMe';
import MyTown from './MyTown';
import './App.css';


function App() {
  const [currentPage, setPage] = useState('aboutMe');

  const pChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <nav>
        <a onClick={() => pChange('aboutMe')}>ABOUT ME</a>
        <a onClick={() => pChange('myTown')}>MY TOWN</a>
      </nav>
      {currentPage === 'aboutMe' ? <AboutMe /> : null}
      {currentPage === 'myTown' ? <MyTown /> : null}
    </div>
  );
}

export default App;
