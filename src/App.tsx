import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './context/Provider';
import Home from './pages/Home';
import AnimeDetails from './components/AnimeDetails';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes/:id" element={<AnimeDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
