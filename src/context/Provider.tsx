import React, { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
// import Context from './Context';

interface Animes {
  animes: Anime[],
  setAnimes: React.Dispatch<React.SetStateAction<Anime[]>>,
  nextPageNumber: number,
  setNextPageNumber: React.Dispatch<React.SetStateAction<number>>

}

interface Anime {
  anilist_id: number,
  titles: Titles,
  cover_image: string,
}

interface Titles {
  rj: 'string';
  en?: 'string'
}


const Context = createContext<Animes>({
animes: [],
setAnimes: () => {},
nextPageNumber: 1,
setNextPageNumber: () => {}
});


interface ProviderProps {
  children: React.ReactNode,
}

function Provider({ children }) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);


  const contextValue: Animes = useMemo(() => ({
    animes,
    setAnimes,
    nextPageNumber,
    setNextPageNumber,
  }), [animes,
    setAnimes,
    nextPageNumber,
    setNextPageNumber]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export  {Provider, Context};
