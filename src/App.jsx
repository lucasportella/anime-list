import React from 'react';
import './index.css';
import Provider from './context/Provider';
import Pagination from './components/Pagination';
import AnimeList from './components/AnimeList';

function App() {
  return (
    <Provider>
      <Pagination />
      <AnimeList />
    </Provider>
  );
}

export default App;
