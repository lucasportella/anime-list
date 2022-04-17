import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { Animes, Anime } from './contextInterfaces';

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
