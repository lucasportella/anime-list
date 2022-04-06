import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);

  const contextValue = useMemo(() => ({
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

export default Provider;
